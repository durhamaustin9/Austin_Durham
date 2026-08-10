# Atlas deployment setup

GitHub Actions builds a standalone Next.js release whenever `master` changes,
uploads it over SSH, activates it atomically, restarts systemd, verifies port
3000, and restores the previous release if the new process is unhealthy.

## One-time server setup

Run these commands from a checkout of this repository on Atlas:

```bash
sudo install -d -o austin -g austin -m 0755 \
  /var/www/austindurham.info \
  /var/www/austindurham.info/tmp \
  /var/www/austindurham.info/releases \
  /var/www/austindurham.info/shared/next-cache

sudo install -o root -g root -m 0755 \
  ops/atlas/deploy-austindurham-portfolio \
  /usr/local/sbin/deploy-austindurham-portfolio

sudo install -o root -g root -m 0644 \
  ops/atlas/austindurham-portfolio.service \
  /etc/systemd/system/austindurham-portfolio.service

sudo install -o root -g root -m 0440 \
  ops/atlas/austindurham-portfolio.sudoers \
  /etc/sudoers.d/austindurham-portfolio

sudo visudo -cf /etc/sudoers.d/austindurham-portfolio
sudo systemctl daemon-reload
sudo systemctl enable austindurham-portfolio.service
```

Verify that `/usr/bin/node` is Node.js 22.13 or newer. If Node is installed at
a different path, update `ExecStart` in the service file before installing it.

Create `/etc/austindurham-portfolio.env` with mode `0600`:

```dotenv
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your_posthog_project_token
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Confirm Atlas's ED25519 SSH host-key fingerprint before authorizing the runner:

```bash
sudo ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
```

It must report `SHA256:fFCSpIOtF/cnEjD8BqUaRimsT1xNsoUgHvK5K9uJ2vY`.
If it does not, stop and replace the `ATLAS_KNOWN_HOSTS` repository secret with
Atlas's current trusted host key.

Add the dedicated GitHub Actions public key to the `austin` account:

```bash
install -d -m 0700 /home/austin/.ssh
touch /home/austin/.ssh/authorized_keys
chmod 0600 /home/austin/.ssh/authorized_keys
grep -qxF "$(sed -n '1p' ops/atlas/github-actions-austindurham.pub)" \
  /home/austin/.ssh/authorized_keys \
  || sed -n '1p' ops/atlas/github-actions-austindurham.pub \
    >> /home/austin/.ssh/authorized_keys
```

Before the first automated deployment, identify and stop the temporary process
currently using port 3000:

```bash
sudo ss -ltnp | grep ':3000'
```

Do not remove or change the working Nginx site configuration.

## GitHub Actions configuration

The repository requires these Actions secrets:

- `ATLAS_HOST`
- `ATLAS_PORT`
- `ATLAS_USER`
- `ATLAS_SSH_KEY`
- `ATLAS_KNOWN_HOSTS`
- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`

It also requires the repository variable
`NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`.

After the server setup is complete, merge the deployment pull request into
`master`. The first push to `master` starts the deployment automatically.

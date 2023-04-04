# infrastructure

Ansible code used for deploying my home infrastructure


## Layout

Almost everything exists on a single host running Proxmox. Proxmox runs the following VMs/containers:

* **jellyfin** - Debian LXC running Jellyfin media server
* **plex** - Ubuntu Server LXC running Plex media server
* **pve-docker** - Alpine LXC running all docker containers
* **haos** - Home Assistant OS VM

Having Plex and Jellyfin separate from the rest of my docker infrastructure allows me to easily reboot the docker host and modify other stuff without interrupting any active streams from the media servers.

### Host specs:

**CPU:** Intel i5-10500 *(chosen for the Quicksync iGPU which is highly efficient at media transcoding)*

**RAM:** 2x 32GB DDR4

**Storage:**
* `/`: 1 TB NVME SSD
* `/vm_storage`: 2x 240 GB SSD in ZFS mirror for config and data files
* `/mnt/storage`: mergerfs + SnapRAID pool totaling 56 TB usable storage. Currently single parity disk but hoping to add a second one soon. Drives run btrfs allowing me to utilize [snapraid-btrfs](https://wiki.selfhosted.show/tools/snapraid-btrfs/) for instant snapshotting

## Roadmap

* [renovate-bot](https://docs.renovatebot.com/) for managing docker container updates
* Terraform for creating VMs and LXCs on Proxmox (currently I manually create and LXC before running Ansible on it)
* CI/CD pipelining
* Potentially explore FreeBSD as base OS. Jails and boot environments are very appealing

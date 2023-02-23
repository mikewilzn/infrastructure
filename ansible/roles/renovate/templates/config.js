module.exports = {
  endpoint: "git.{{ personal_domain }}/api/v2",
  token: '{{ renovate_gitea_token }}',
  platform: 'gitea',
  dryRun: true,
  autodiscover: true,
  onboarding: false,
  redisUrl: 'redis://redis',
  repositoryCache: 'enabled',
  persistRepoData: true,
  binarySource: "docker",
  dockerUser: "{{ primary_uid }}",
  baseDir: "{{ data_dir }}/renovate",
};

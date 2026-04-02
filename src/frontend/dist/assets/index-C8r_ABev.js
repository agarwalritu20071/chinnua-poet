let agent;

if (options.agent) {
  agent = options.agent;
} else {
  agent = HttpAgent.createSync({
    ...options.agentOptions
  });
}

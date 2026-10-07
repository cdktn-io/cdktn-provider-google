# `cesAgent` Submodule <a name="`cesAgent` Submodule" id="@cdktn/provider-google.cesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesAgent <a name="CesAgent" id="@cdktn/provider-google.cesAgent.CesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  location: str,
  after_agent_callbacks: IResolvable | typing.List[CesAgentAfterAgentCallbacks] = None,
  after_model_callbacks: IResolvable | typing.List[CesAgentAfterModelCallbacks] = None,
  after_tool_callbacks: IResolvable | typing.List[CesAgentAfterToolCallbacks] = None,
  agent_id: str = None,
  before_agent_callbacks: IResolvable | typing.List[CesAgentBeforeAgentCallbacks] = None,
  before_model_callbacks: IResolvable | typing.List[CesAgentBeforeModelCallbacks] = None,
  before_tool_callbacks: IResolvable | typing.List[CesAgentBeforeToolCallbacks] = None,
  child_agents: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  instruction: str = None,
  llm_agent: CesAgentLlmAgent = None,
  model_settings: CesAgentModelSettings = None,
  project: str = None,
  remote_a2_a_agent: CesAgentRemoteA2AAgent = None,
  remote_dialogflow_agent: CesAgentRemoteDialogflowAgent = None,
  timeouts: CesAgentTimeouts = None,
  tools: typing.List[str] = None,
  toolsets: IResolvable | typing.List[CesAgentToolsets] = None,
  transfer_rules: IResolvable | typing.List[CesAgentTransferRules] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterAgentCallbacks">after_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterModelCallbacks">after_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterToolCallbacks">after_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeAgentCallbacks">before_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeModelCallbacks">before_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeToolCallbacks">before_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.childAgents">child_agents</a></code> | <code>typing.List[str]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.instruction">instruction</a></code> | <code>str</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.llmAgent">llm_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteA2AAgent">remote_a2_a_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteDialogflowAgent">remote_dialogflow_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.tools">tools</a></code> | <code>typing.List[str]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.toolsets">toolsets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.transferRules">transfer_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]</code> | transfer_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}

---

##### `after_agent_callbacks`<sup>Optional</sup> <a name="after_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterAgentCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}

---

##### `after_model_callbacks`<sup>Optional</sup> <a name="after_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterModelCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}

---

##### `after_tool_callbacks`<sup>Optional</sup> <a name="after_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterToolCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.agentId"></a>

- *Type:* str

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}

---

##### `before_agent_callbacks`<sup>Optional</sup> <a name="before_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeAgentCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}

---

##### `before_model_callbacks`<sup>Optional</sup> <a name="before_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeModelCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}

---

##### `before_tool_callbacks`<sup>Optional</sup> <a name="before_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeToolCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}

---

##### `child_agents`<sup>Optional</sup> <a name="child_agents" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.childAgents"></a>

- *Type:* typing.List[str]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deletion_policy CesAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.guardrails"></a>

- *Type:* typing.List[str]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.instruction"></a>

- *Type:* str

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}

---

##### `llm_agent`<sup>Optional</sup> <a name="llm_agent" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.llmAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}.

---

##### `remote_a2_a_agent`<sup>Optional</sup> <a name="remote_a2_a_agent" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteA2AAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}

---

##### `remote_dialogflow_agent`<sup>Optional</sup> <a name="remote_dialogflow_agent" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteDialogflowAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#timeouts CesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.tools"></a>

- *Type:* typing.List[str]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.toolsets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}

---

##### `transfer_rules`<sup>Optional</sup> <a name="transfer_rules" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.transferRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks">put_after_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks">put_after_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks">put_after_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks">put_before_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks">put_before_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks">put_before_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent">put_llm_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent">put_remote_a2_a_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent">put_remote_dialogflow_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putToolsets">put_toolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTransferRules">put_transfer_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks">reset_after_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks">reset_after_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks">reset_after_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks">reset_before_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks">reset_before_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks">reset_before_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents">reset_child_agents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails">reset_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent">reset_llm_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings">reset_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent">reset_remote_a2_a_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent">reset_remote_dialogflow_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTools">reset_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetToolsets">reset_toolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules">reset_transfer_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesAgent.CesAgent.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesAgent.CesAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesAgent.CesAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesAgent.CesAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_after_agent_callbacks` <a name="put_after_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks"></a>

```python
def put_after_agent_callbacks(
  value: IResolvable | typing.List[CesAgentAfterAgentCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]

---

##### `put_after_model_callbacks` <a name="put_after_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks"></a>

```python
def put_after_model_callbacks(
  value: IResolvable | typing.List[CesAgentAfterModelCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]

---

##### `put_after_tool_callbacks` <a name="put_after_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks"></a>

```python
def put_after_tool_callbacks(
  value: IResolvable | typing.List[CesAgentAfterToolCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]

---

##### `put_before_agent_callbacks` <a name="put_before_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks"></a>

```python
def put_before_agent_callbacks(
  value: IResolvable | typing.List[CesAgentBeforeAgentCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]

---

##### `put_before_model_callbacks` <a name="put_before_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks"></a>

```python
def put_before_model_callbacks(
  value: IResolvable | typing.List[CesAgentBeforeModelCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]

---

##### `put_before_tool_callbacks` <a name="put_before_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks"></a>

```python
def put_before_tool_callbacks(
  value: IResolvable | typing.List[CesAgentBeforeToolCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]

---

##### `put_llm_agent` <a name="put_llm_agent" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent"></a>

```python
def put_llm_agent() -> None
```

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model CesAgent#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#temperature CesAgent#temperature}

---

##### `put_remote_a2_a_agent` <a name="put_remote_a2_a_agent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent"></a>

```python
def put_remote_a2_a_agent(
  a2_a_config: CesAgentRemoteA2AAgentA2AConfig
) -> None
```

###### `a2_a_config`<sup>Required</sup> <a name="a2_a_config" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent.parameter.a2AConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#a2a_config CesAgent#a2a_config}

---

##### `put_remote_dialogflow_agent` <a name="put_remote_dialogflow_agent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent"></a>

```python
def put_remote_dialogflow_agent(
  agent: str,
  flow_id: str,
  environment_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  language_code_variable: str = None,
  output_variable_mapping: typing.Mapping[str] = None,
  respect_response_interruption_settings: bool | IResolvable = None
) -> None
```

###### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.agent"></a>

- *Type:* str

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent CesAgent#agent}

---

###### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.flowId"></a>

- *Type:* str

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#flow_id CesAgent#flow_id}

---

###### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.environmentId"></a>

- *Type:* str

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#environment_id CesAgent#environment_id}

---

###### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.inputVariableMapping"></a>

- *Type:* typing.Mapping[str]

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

###### `language_code_variable`<sup>Optional</sup> <a name="language_code_variable" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.languageCodeVariable"></a>

- *Type:* str

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#language_code_variable CesAgent#language_code_variable}

---

###### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.outputVariableMapping"></a>

- *Type:* typing.Mapping[str]

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

###### `respect_response_interruption_settings`<sup>Optional</sup> <a name="respect_response_interruption_settings" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.respectResponseInterruptionSettings"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}.

---

##### `put_toolsets` <a name="put_toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets"></a>

```python
def put_toolsets(
  value: IResolvable | typing.List[CesAgentToolsets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]

---

##### `put_transfer_rules` <a name="put_transfer_rules" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules"></a>

```python
def put_transfer_rules(
  value: IResolvable | typing.List[CesAgentTransferRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]

---

##### `reset_after_agent_callbacks` <a name="reset_after_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks"></a>

```python
def reset_after_agent_callbacks() -> None
```

##### `reset_after_model_callbacks` <a name="reset_after_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks"></a>

```python
def reset_after_model_callbacks() -> None
```

##### `reset_after_tool_callbacks` <a name="reset_after_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks"></a>

```python
def reset_after_tool_callbacks() -> None
```

##### `reset_agent_id` <a name="reset_agent_id" id="@cdktn/provider-google.cesAgent.CesAgent.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_before_agent_callbacks` <a name="reset_before_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks"></a>

```python
def reset_before_agent_callbacks() -> None
```

##### `reset_before_model_callbacks` <a name="reset_before_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks"></a>

```python
def reset_before_model_callbacks() -> None
```

##### `reset_before_tool_callbacks` <a name="reset_before_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks"></a>

```python
def reset_before_tool_callbacks() -> None
```

##### `reset_child_agents` <a name="reset_child_agents" id="@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents"></a>

```python
def reset_child_agents() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_guardrails` <a name="reset_guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails"></a>

```python
def reset_guardrails() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesAgent.CesAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-google.cesAgent.CesAgent.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_llm_agent` <a name="reset_llm_agent" id="@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent"></a>

```python
def reset_llm_agent() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesAgent.CesAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remote_a2_a_agent` <a name="reset_remote_a2_a_agent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent"></a>

```python
def reset_remote_a2_a_agent() -> None
```

##### `reset_remote_dialogflow_agent` <a name="reset_remote_dialogflow_agent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent"></a>

```python
def reset_remote_dialogflow_agent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tools` <a name="reset_tools" id="@cdktn/provider-google.cesAgent.CesAgent.resetTools"></a>

```python
def reset_tools() -> None
```

##### `reset_toolsets` <a name="reset_toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.resetToolsets"></a>

```python
def reset_toolsets() -> None
```

##### `reset_transfer_rules` <a name="reset_transfer_rules" id="@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules"></a>

```python
def reset_transfer_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgent.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks">after_agent_callbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks">after_model_callbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks">after_tool_callbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks">before_agent_callbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks">before_model_callbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks">before_tool_callbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary">generated_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent">llm_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent">remote_a2_a_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent">remote_dialogflow_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsets">toolsets</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRules">transfer_rules</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput">after_agent_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput">after_model_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput">after_tool_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput">before_agent_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput">before_model_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput">before_tool_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput">child_agents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput">guardrails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput">llm_agent_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput">remote_a2_a_agent_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput">remote_dialogflow_agent_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput">toolsets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput">tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput">transfer_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgents">child_agents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesAgent.CesAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesAgent.CesAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `after_agent_callbacks`<sup>Required</sup> <a name="after_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks"></a>

```python
after_agent_callbacks: CesAgentAfterAgentCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a>

---

##### `after_model_callbacks`<sup>Required</sup> <a name="after_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks"></a>

```python
after_model_callbacks: CesAgentAfterModelCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a>

---

##### `after_tool_callbacks`<sup>Required</sup> <a name="after_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks"></a>

```python
after_tool_callbacks: CesAgentAfterToolCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a>

---

##### `before_agent_callbacks`<sup>Required</sup> <a name="before_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks"></a>

```python
before_agent_callbacks: CesAgentBeforeAgentCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a>

---

##### `before_model_callbacks`<sup>Required</sup> <a name="before_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks"></a>

```python
before_model_callbacks: CesAgentBeforeModelCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a>

---

##### `before_tool_callbacks`<sup>Required</sup> <a name="before_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks"></a>

```python
before_tool_callbacks: CesAgentBeforeToolCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesAgent.CesAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesAgent.CesAgent.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `generated_summary`<sup>Required</sup> <a name="generated_summary" id="@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary"></a>

```python
generated_summary: str
```

- *Type:* str

---

##### `llm_agent`<sup>Required</sup> <a name="llm_agent" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent"></a>

```python
llm_agent: CesAgentLlmAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a>

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings"></a>

```python
model_settings: CesAgentModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_a2_a_agent`<sup>Required</sup> <a name="remote_a2_a_agent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent"></a>

```python
remote_a2_a_agent: CesAgentRemoteA2AAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a>

---

##### `remote_dialogflow_agent`<sup>Required</sup> <a name="remote_dialogflow_agent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent"></a>

```python
remote_dialogflow_agent: CesAgentRemoteDialogflowAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeouts"></a>

```python
timeouts: CesAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a>

---

##### `toolsets`<sup>Required</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsets"></a>

```python
toolsets: CesAgentToolsetsList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a>

---

##### `transfer_rules`<sup>Required</sup> <a name="transfer_rules" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRules"></a>

```python
transfer_rules: CesAgentTransferRulesList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesAgent.CesAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `after_agent_callbacks_input`<sup>Optional</sup> <a name="after_agent_callbacks_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput"></a>

```python
after_agent_callbacks_input: IResolvable | typing.List[CesAgentAfterAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]

---

##### `after_model_callbacks_input`<sup>Optional</sup> <a name="after_model_callbacks_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput"></a>

```python
after_model_callbacks_input: IResolvable | typing.List[CesAgentAfterModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]

---

##### `after_tool_callbacks_input`<sup>Optional</sup> <a name="after_tool_callbacks_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput"></a>

```python
after_tool_callbacks_input: IResolvable | typing.List[CesAgentAfterToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `before_agent_callbacks_input`<sup>Optional</sup> <a name="before_agent_callbacks_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput"></a>

```python
before_agent_callbacks_input: IResolvable | typing.List[CesAgentBeforeAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]

---

##### `before_model_callbacks_input`<sup>Optional</sup> <a name="before_model_callbacks_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput"></a>

```python
before_model_callbacks_input: IResolvable | typing.List[CesAgentBeforeModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]

---

##### `before_tool_callbacks_input`<sup>Optional</sup> <a name="before_tool_callbacks_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput"></a>

```python
before_tool_callbacks_input: IResolvable | typing.List[CesAgentBeforeToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]

---

##### `child_agents_input`<sup>Optional</sup> <a name="child_agents_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput"></a>

```python
child_agents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `guardrails_input`<sup>Optional</sup> <a name="guardrails_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput"></a>

```python
guardrails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `llm_agent_input`<sup>Optional</sup> <a name="llm_agent_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput"></a>

```python
llm_agent_input: CesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput"></a>

```python
model_settings_input: CesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remote_a2_a_agent_input`<sup>Optional</sup> <a name="remote_a2_a_agent_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput"></a>

```python
remote_a2_a_agent_input: CesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `remote_dialogflow_agent_input`<sup>Optional</sup> <a name="remote_dialogflow_agent_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput"></a>

```python
remote_dialogflow_agent_input: CesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---

##### `toolsets_input`<sup>Optional</sup> <a name="toolsets_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput"></a>

```python
toolsets_input: IResolvable | typing.List[CesAgentToolsets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput"></a>

```python
tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transfer_rules_input`<sup>Optional</sup> <a name="transfer_rules_input" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput"></a>

```python
transfer_rules_input: IResolvable | typing.List[CesAgentTransferRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgent.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `child_agents`<sup>Required</sup> <a name="child_agents" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgents"></a>

```python
child_agents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgent.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgent.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesAgentAfterAgentCallbacks <a name="CesAgentAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterAgentCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentAfterModelCallbacks <a name="CesAgentAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterModelCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentAfterToolCallbacks <a name="CesAgentAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterToolCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeAgentCallbacks <a name="CesAgentBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeAgentCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeModelCallbacks <a name="CesAgentBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeModelCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeToolCallbacks <a name="CesAgentBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeToolCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentConfig <a name="CesAgentConfig" id="@cdktn/provider-google.cesAgent.CesAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  location: str,
  after_agent_callbacks: IResolvable | typing.List[CesAgentAfterAgentCallbacks] = None,
  after_model_callbacks: IResolvable | typing.List[CesAgentAfterModelCallbacks] = None,
  after_tool_callbacks: IResolvable | typing.List[CesAgentAfterToolCallbacks] = None,
  agent_id: str = None,
  before_agent_callbacks: IResolvable | typing.List[CesAgentBeforeAgentCallbacks] = None,
  before_model_callbacks: IResolvable | typing.List[CesAgentBeforeModelCallbacks] = None,
  before_tool_callbacks: IResolvable | typing.List[CesAgentBeforeToolCallbacks] = None,
  child_agents: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  instruction: str = None,
  llm_agent: CesAgentLlmAgent = None,
  model_settings: CesAgentModelSettings = None,
  project: str = None,
  remote_a2_a_agent: CesAgentRemoteA2AAgent = None,
  remote_dialogflow_agent: CesAgentRemoteDialogflowAgent = None,
  timeouts: CesAgentTimeouts = None,
  tools: typing.List[str] = None,
  toolsets: IResolvable | typing.List[CesAgentToolsets] = None,
  transfer_rules: IResolvable | typing.List[CesAgentTransferRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks">after_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks">after_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks">after_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId">agent_id</a></code> | <code>str</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks">before_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks">before_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks">before_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents">child_agents</a></code> | <code>typing.List[str]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction">instruction</a></code> | <code>str</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent">llm_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent">remote_a2_a_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent">remote_dialogflow_agent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools">tools</a></code> | <code>typing.List[str]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets">toolsets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules">transfer_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]</code> | transfer_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}

---

##### `after_agent_callbacks`<sup>Optional</sup> <a name="after_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks"></a>

```python
after_agent_callbacks: IResolvable | typing.List[CesAgentAfterAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}

---

##### `after_model_callbacks`<sup>Optional</sup> <a name="after_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks"></a>

```python
after_model_callbacks: IResolvable | typing.List[CesAgentAfterModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}

---

##### `after_tool_callbacks`<sup>Optional</sup> <a name="after_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks"></a>

```python
after_tool_callbacks: IResolvable | typing.List[CesAgentAfterToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}

---

##### `before_agent_callbacks`<sup>Optional</sup> <a name="before_agent_callbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks"></a>

```python
before_agent_callbacks: IResolvable | typing.List[CesAgentBeforeAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}

---

##### `before_model_callbacks`<sup>Optional</sup> <a name="before_model_callbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks"></a>

```python
before_model_callbacks: IResolvable | typing.List[CesAgentBeforeModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}

---

##### `before_tool_callbacks`<sup>Optional</sup> <a name="before_tool_callbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks"></a>

```python
before_tool_callbacks: IResolvable | typing.List[CesAgentBeforeToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}

---

##### `child_agents`<sup>Optional</sup> <a name="child_agents" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents"></a>

```python
child_agents: typing.List[str]
```

- *Type:* typing.List[str]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deletion_policy CesAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}

---

##### `llm_agent`<sup>Optional</sup> <a name="llm_agent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent"></a>

```python
llm_agent: CesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings"></a>

```python
model_settings: CesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}.

---

##### `remote_a2_a_agent`<sup>Optional</sup> <a name="remote_a2_a_agent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent"></a>

```python
remote_a2_a_agent: CesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}

---

##### `remote_dialogflow_agent`<sup>Optional</sup> <a name="remote_dialogflow_agent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent"></a>

```python
remote_dialogflow_agent: CesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts"></a>

```python
timeouts: CesAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#timeouts CesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets"></a>

```python
toolsets: IResolvable | typing.List[CesAgentToolsets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}

---

##### `transfer_rules`<sup>Optional</sup> <a name="transfer_rules" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules"></a>

```python
transfer_rules: IResolvable | typing.List[CesAgentTransferRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}

---

### CesAgentLlmAgent <a name="CesAgentLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentLlmAgent()
```


### CesAgentModelSettings <a name="CesAgentModelSettings" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model CesAgent#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#temperature CesAgent#temperature}

---

### CesAgentRemoteA2AAgent <a name="CesAgentRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgent(
  a2_a_config: CesAgentRemoteA2AAgentA2AConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig">a2_a_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `a2_a_config`<sup>Required</sup> <a name="a2_a_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig"></a>

```python
a2_a_config: CesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#a2a_config CesAgent#a2a_config}

---

### CesAgentRemoteA2AAgentA2AConfig <a name="CesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfig(
  agent_card: CesAgentRemoteA2AAgentA2AConfigAgentCard = None,
  agent_registry: str = None,
  api_authentication: CesAgentRemoteA2AAgentA2AConfigApiAuthentication = None,
  context_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  output_variable_mapping: typing.Mapping[str] = None,
  streaming_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard">agent_card</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">agent_registry</a></code> | <code>str</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId">context_id</a></code> | <code>str</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">streaming_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `agent_card`<sup>Optional</sup> <a name="agent_card" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```python
agent_card: CesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_card CesAgent#agent_card}

---

##### `agent_registry`<sup>Optional</sup> <a name="agent_registry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```python
agent_registry: str
```

- *Type:* str

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_registry CesAgent#agent_registry}

---

##### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```python
api_authentication: CesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_authentication CesAgent#api_authentication}

---

##### `context_id`<sup>Optional</sup> <a name="context_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```python
context_id: str
```

- *Type:* str

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#context_id CesAgent#context_id}

---

##### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `streaming_enabled`<sup>Optional</sup> <a name="streaming_enabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```python
streaming_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#streaming_enabled CesAgent#streaming_enabled}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCard <a name="CesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard(
  description: str,
  name: str,
  skills: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSkills],
  supported_interfaces: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces],
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">description</a></code> | <code>str</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">name</a></code> | <code>str</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">skills</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]</code> | skills block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">supported_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]</code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">version</a></code> | <code>str</code> | The version of the agent. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```python
skills: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#skills CesAgent#skills}

---

##### `supported_interfaces`<sup>Required</sup> <a name="supported_interfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```python
supported_interfaces: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#supported_interfaces CesAgent#supported_interfaces}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#version CesAgent#version}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills(
  description: str,
  id: str,
  name: str,
  tags: typing.List[str],
  examples: typing.List[str] = None,
  input_modes: typing.List[str] = None,
  output_modes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">description</a></code> | <code>str</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">id</a></code> | <code>str</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">name</a></code> | <code>str</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">tags</a></code> | <code>typing.List[str]</code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">examples</a></code> | <code>typing.List[str]</code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">input_modes</a></code> | <code>typing.List[str]</code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">output_modes</a></code> | <code>typing.List[str]</code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```python
description: str
```

- *Type:* str

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```python
id: str
```

- *Type:* str

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tags CesAgent#tags}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#examples CesAgent#examples}

---

##### `input_modes`<sup>Optional</sup> <a name="input_modes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```python
input_modes: typing.List[str]
```

- *Type:* typing.List[str]

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_modes CesAgent#input_modes}

---

##### `output_modes`<sup>Optional</sup> <a name="output_modes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```python
output_modes: typing.List[str]
```

- *Type:* typing.List[str]

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_modes CesAgent#output_modes}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces(
  protocol_binding: str,
  protocol_version: str,
  url: str,
  tenant: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">protocol_version</a></code> | <code>str</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">url</a></code> | <code>str</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">tenant</a></code> | <code>str</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_binding CesAgent#protocol_binding}

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_version CesAgent#protocol_version}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```python
url: str
```

- *Type:* str

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#url CesAgent#url}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tenant CesAgent#tenant}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication(
  api_key_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig = None,
  bearer_token_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig = None,
  oauth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig = None,
  service_account_auth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_config CesAgent#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#bearer_token_config CesAgent#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```python
oauth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_config CesAgent#oauth_config}

---

##### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account_auth_config CesAgent#service_account_auth_config}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_secret_version CesAgent#api_key_secret_version}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#key_name CesAgent#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#request_location CesAgent#request_location}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig(
  token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token CesAgent#token}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_id CesAgent#client_id}

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_secret_version CesAgent#client_secret_version}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_grant_type CesAgent#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token_endpoint CesAgent#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig(
  service_account: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account CesAgent#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteDialogflowAgent <a name="CesAgentRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteDialogflowAgent(
  agent: str,
  flow_id: str,
  environment_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  language_code_variable: str = None,
  output_variable_mapping: typing.Mapping[str] = None,
  respect_response_interruption_settings: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent">agent</a></code> | <code>str</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId">flow_id</a></code> | <code>str</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId">environment_id</a></code> | <code>str</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable">language_code_variable</a></code> | <code>str</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">respect_response_interruption_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent"></a>

```python
agent: str
```

- *Type:* str

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent CesAgent#agent}

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#flow_id CesAgent#flow_id}

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#environment_id CesAgent#environment_id}

---

##### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `language_code_variable`<sup>Optional</sup> <a name="language_code_variable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```python
language_code_variable: str
```

- *Type:* str

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#language_code_variable CesAgent#language_code_variable}

---

##### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `respect_response_interruption_settings`<sup>Optional</sup> <a name="respect_response_interruption_settings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```python
respect_response_interruption_settings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}

---

### CesAgentTimeouts <a name="CesAgentTimeouts" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}.

---

### CesAgentToolsets <a name="CesAgentToolsets" id="@cdktn/provider-google.cesAgent.CesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentToolsets(
  toolset: str,
  tool_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset">toolset</a></code> | <code>str</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds">tool_ids</a></code> | <code>typing.List[str]</code> | The tools IDs to filter the toolset. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolset CesAgent#toolset}

---

##### `tool_ids`<sup>Optional</sup> <a name="tool_ids" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds"></a>

```python
tool_ids: typing.List[str]
```

- *Type:* typing.List[str]

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tool_ids CesAgent#tool_ids}

---

### CesAgentTransferRules <a name="CesAgentTransferRules" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRules(
  child_agent: str,
  direction: str,
  deterministic_transfer: CesAgentTransferRulesDeterministicTransfer = None,
  disable_planner_transfer: CesAgentTransferRulesDisablePlannerTransfer = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent">child_agent</a></code> | <code>str</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction">direction</a></code> | <code>str</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer">deterministic_transfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer">disable_planner_transfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `child_agent`<sup>Required</sup> <a name="child_agent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent"></a>

```python
child_agent: str
```

- *Type:* str

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agent CesAgent#child_agent}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#direction CesAgent#direction}

---

##### `deterministic_transfer`<sup>Optional</sup> <a name="deterministic_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer"></a>

```python
deterministic_transfer: CesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deterministic_transfer CesAgent#deterministic_transfer}

---

##### `disable_planner_transfer`<sup>Optional</sup> <a name="disable_planner_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer"></a>

```python
disable_planner_transfer: CesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disable_planner_transfer CesAgent#disable_planner_transfer}

---

### CesAgentTransferRulesDeterministicTransfer <a name="CesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDeterministicTransfer(
  expression_condition: CesAgentTransferRulesDeterministicTransferExpressionCondition = None,
  python_code_condition: CesAgentTransferRulesDeterministicTransferPythonCodeCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">python_code_condition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `expression_condition`<sup>Optional</sup> <a name="expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```python
expression_condition: CesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

##### `python_code_condition`<sup>Optional</sup> <a name="python_code_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```python
python_code_condition: CesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code_condition CesAgent#python_code_condition}

---

### CesAgentTransferRulesDeterministicTransferExpressionCondition <a name="CesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">expression</a></code> | <code>str</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

### CesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="CesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition(
  python_code: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

### CesAgentTransferRulesDisablePlannerTransfer <a name="CesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDisablePlannerTransfer(
  expression_condition: CesAgentTransferRulesDisablePlannerTransferExpressionCondition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```python
expression_condition: CesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

### CesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="CesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">expression</a></code> | <code>str</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAgentAfterAgentCallbacksList <a name="CesAgentAfterAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterAgentCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentAfterAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentAfterAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>]

---


### CesAgentAfterAgentCallbacksOutputReference <a name="CesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterAgentCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentAfterAgentCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>

---


### CesAgentAfterModelCallbacksList <a name="CesAgentAfterModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterModelCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentAfterModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentAfterModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>]

---


### CesAgentAfterModelCallbacksOutputReference <a name="CesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterModelCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentAfterModelCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>

---


### CesAgentAfterToolCallbacksList <a name="CesAgentAfterToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterToolCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentAfterToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentAfterToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>]

---


### CesAgentAfterToolCallbacksOutputReference <a name="CesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentAfterToolCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentAfterToolCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>

---


### CesAgentBeforeAgentCallbacksList <a name="CesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeAgentCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentBeforeAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentBeforeAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>]

---


### CesAgentBeforeAgentCallbacksOutputReference <a name="CesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeAgentCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentBeforeAgentCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>

---


### CesAgentBeforeModelCallbacksList <a name="CesAgentBeforeModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeModelCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentBeforeModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentBeforeModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>]

---


### CesAgentBeforeModelCallbacksOutputReference <a name="CesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeModelCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentBeforeModelCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>

---


### CesAgentBeforeToolCallbacksList <a name="CesAgentBeforeToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeToolCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentBeforeToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentBeforeToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>]

---


### CesAgentBeforeToolCallbacksOutputReference <a name="CesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentBeforeToolCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentBeforeToolCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>

---


### CesAgentLlmAgentOutputReference <a name="CesAgentLlmAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentLlmAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---


### CesAgentModelSettingsOutputReference <a name="CesAgentModelSettingsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">put_skills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">put_supported_interfaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_skills` <a name="put_skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```python
def put_skills(
  value: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

---

##### `put_supported_interfaces` <a name="put_supported_interfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```python
def put_supported_interfaces(
  value: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">supported_interfaces</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">skills_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">supported_interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```python
skills: CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `supported_interfaces`<sup>Required</sup> <a name="supported_interfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```python
supported_interfaces: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `skills_input`<sup>Optional</sup> <a name="skills_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```python
skills_input: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

---

##### `supported_interfaces_input`<sup>Optional</sup> <a name="supported_interfaces_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```python
supported_interfaces_input: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">reset_examples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">reset_input_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">reset_output_modes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_examples` <a name="reset_examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```python
def reset_examples() -> None
```

##### `reset_input_modes` <a name="reset_input_modes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```python
def reset_input_modes() -> None
```

##### `reset_output_modes` <a name="reset_output_modes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```python
def reset_output_modes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">examples_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">input_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">output_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">examples</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">input_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">output_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `examples_input`<sup>Optional</sup> <a name="examples_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```python
examples_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_modes_input`<sup>Optional</sup> <a name="input_modes_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```python
input_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_modes_input`<sup>Optional</sup> <a name="output_modes_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```python
output_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_modes`<sup>Required</sup> <a name="input_modes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```python
input_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_modes`<sup>Required</sup> <a name="output_modes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```python
output_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSkills
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">reset_tenant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant` <a name="reset_tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```python
def reset_tenant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">protocol_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_binding_input`<sup>Optional</sup> <a name="protocol_binding_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```python
protocol_binding_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">client_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_version_input`<sup>Optional</sup> <a name="client_secret_version_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```python
client_secret_version_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">put_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">reset_service_account_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
) -> None
```

###### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_secret_version CesAgent#api_key_secret_version}

---

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#key_name CesAgent#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#request_location CesAgent#request_location}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  token: str
) -> None
```

###### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token CesAgent#token}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_id CesAgent#client_id}

---

###### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.clientSecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_secret_version CesAgent#client_secret_version}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_grant_type CesAgent#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token_endpoint CesAgent#token_endpoint}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

##### `put_service_account_auth_config` <a name="put_service_account_auth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```python
def put_service_account_auth_config(
  service_account: str,
  scopes: typing.List[str] = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.serviceAccount"></a>

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account CesAgent#service_account}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_account_auth_config` <a name="reset_service_account_auth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```python
def reset_service_account_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">service_account_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `service_account_auth_config_input`<sup>Optional</sup> <a name="service_account_auth_config_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```python
service_account_auth_config_input: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">put_agent_card</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">put_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">reset_agent_card</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">reset_agent_registry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">reset_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">reset_context_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">reset_input_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">reset_output_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">reset_streaming_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_card` <a name="put_agent_card" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```python
def put_agent_card(
  description: str,
  name: str,
  skills: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSkills],
  supported_interfaces: IResolvable | typing.List[CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces],
  version: str
) -> None
```

###### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.description"></a>

- *Type:* str

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.name"></a>

- *Type:* str

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

###### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.skills"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#skills CesAgent#skills}

---

###### `supported_interfaces`<sup>Required</sup> <a name="supported_interfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.supportedInterfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#supported_interfaces CesAgent#supported_interfaces}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.version"></a>

- *Type:* str

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#version CesAgent#version}

---

##### `put_api_authentication` <a name="put_api_authentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```python
def put_api_authentication(
  api_key_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig = None,
  bearer_token_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig = None,
  oauth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig = None,
  service_account_auth_config: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_config CesAgent#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#bearer_token_config CesAgent#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_config CesAgent#oauth_config}

---

###### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.serviceAccountAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account_auth_config CesAgent#service_account_auth_config}

---

##### `reset_agent_card` <a name="reset_agent_card" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```python
def reset_agent_card() -> None
```

##### `reset_agent_registry` <a name="reset_agent_registry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```python
def reset_agent_registry() -> None
```

##### `reset_api_authentication` <a name="reset_api_authentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```python
def reset_api_authentication() -> None
```

##### `reset_context_id` <a name="reset_context_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```python
def reset_context_id() -> None
```

##### `reset_input_variable_mapping` <a name="reset_input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```python
def reset_input_variable_mapping() -> None
```

##### `reset_output_variable_mapping` <a name="reset_output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```python
def reset_output_variable_mapping() -> None
```

##### `reset_streaming_enabled` <a name="reset_streaming_enabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```python
def reset_streaming_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">agent_card</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">agent_card_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">agent_registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">api_authentication_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">context_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">input_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">output_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">streaming_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">agent_registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">context_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">streaming_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_card`<sup>Required</sup> <a name="agent_card" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```python
agent_card: CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```python
api_authentication: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `agent_card_input`<sup>Optional</sup> <a name="agent_card_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```python
agent_card_input: CesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `agent_registry_input`<sup>Optional</sup> <a name="agent_registry_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```python
agent_registry_input: str
```

- *Type:* str

---

##### `api_authentication_input`<sup>Optional</sup> <a name="api_authentication_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```python
api_authentication_input: CesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `context_id_input`<sup>Optional</sup> <a name="context_id_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```python
context_id_input: str
```

- *Type:* str

---

##### `input_variable_mapping_input`<sup>Optional</sup> <a name="input_variable_mapping_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```python
input_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `output_variable_mapping_input`<sup>Optional</sup> <a name="output_variable_mapping_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```python
output_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `streaming_enabled_input`<sup>Optional</sup> <a name="streaming_enabled_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```python
streaming_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `agent_registry`<sup>Required</sup> <a name="agent_registry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```python
agent_registry: str
```

- *Type:* str

---

##### `context_id`<sup>Required</sup> <a name="context_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```python
context_id: str
```

- *Type:* str

---

##### `input_variable_mapping`<sup>Required</sup> <a name="input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `output_variable_mapping`<sup>Required</sup> <a name="output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `streaming_enabled`<sup>Required</sup> <a name="streaming_enabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```python
streaming_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


### CesAgentRemoteA2AAgentOutputReference <a name="CesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteA2AAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig">put_a2_a_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_a2_a_config` <a name="put_a2_a_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```python
def put_a2_a_config(
  agent_card: CesAgentRemoteA2AAgentA2AConfigAgentCard = None,
  agent_registry: str = None,
  api_authentication: CesAgentRemoteA2AAgentA2AConfigApiAuthentication = None,
  context_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  output_variable_mapping: typing.Mapping[str] = None,
  streaming_enabled: bool | IResolvable = None
) -> None
```

###### `agent_card`<sup>Optional</sup> <a name="agent_card" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.agentCard"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_card CesAgent#agent_card}

---

###### `agent_registry`<sup>Optional</sup> <a name="agent_registry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.agentRegistry"></a>

- *Type:* str

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_registry CesAgent#agent_registry}

---

###### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.apiAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_authentication CesAgent#api_authentication}

---

###### `context_id`<sup>Optional</sup> <a name="context_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.contextId"></a>

- *Type:* str

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#context_id CesAgent#context_id}

---

###### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.inputVariableMapping"></a>

- *Type:* typing.Mapping[str]

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

###### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.outputVariableMapping"></a>

- *Type:* typing.Mapping[str]

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

###### `streaming_enabled`<sup>Optional</sup> <a name="streaming_enabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.streamingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#streaming_enabled CesAgent#streaming_enabled}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig">a2_a_config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">a2_a_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `a2_a_config`<sup>Required</sup> <a name="a2_a_config" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```python
a2_a_config: CesAgentRemoteA2AAgentA2AConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `a2_a_config_input`<sup>Optional</sup> <a name="a2_a_config_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```python
a2_a_config_input: CesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---


### CesAgentRemoteDialogflowAgentOutputReference <a name="CesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentRemoteDialogflowAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">reset_input_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">reset_language_code_variable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">reset_output_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">reset_respect_response_interruption_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_input_variable_mapping` <a name="reset_input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```python
def reset_input_variable_mapping() -> None
```

##### `reset_language_code_variable` <a name="reset_language_code_variable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```python
def reset_language_code_variable() -> None
```

##### `reset_output_variable_mapping` <a name="reset_output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```python
def reset_output_variable_mapping() -> None
```

##### `reset_respect_response_interruption_settings` <a name="reset_respect_response_interruption_settings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```python
def reset_respect_response_interruption_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput">agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">input_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">language_code_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">output_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">respect_response_interruption_settings_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent">agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId">flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">language_code_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">respect_response_interruption_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```python
agent_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `flow_id_input`<sup>Optional</sup> <a name="flow_id_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```python
flow_id_input: str
```

- *Type:* str

---

##### `input_variable_mapping_input`<sup>Optional</sup> <a name="input_variable_mapping_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```python
input_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `language_code_variable_input`<sup>Optional</sup> <a name="language_code_variable_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```python
language_code_variable_input: str
```

- *Type:* str

---

##### `output_variable_mapping_input`<sup>Optional</sup> <a name="output_variable_mapping_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```python
output_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `respect_response_interruption_settings_input`<sup>Optional</sup> <a name="respect_response_interruption_settings_input" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```python
respect_response_interruption_settings_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```python
agent: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

---

##### `input_variable_mapping`<sup>Required</sup> <a name="input_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `language_code_variable`<sup>Required</sup> <a name="language_code_variable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```python
language_code_variable: str
```

- *Type:* str

---

##### `output_variable_mapping`<sup>Required</sup> <a name="output_variable_mapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `respect_response_interruption_settings`<sup>Required</sup> <a name="respect_response_interruption_settings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```python
respect_response_interruption_settings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---


### CesAgentTimeoutsOutputReference <a name="CesAgentTimeoutsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---


### CesAgentToolsetsList <a name="CesAgentToolsetsList" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentToolsetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentToolsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentToolsets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>]

---


### CesAgentToolsetsOutputReference <a name="CesAgentToolsetsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentToolsetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds">reset_tool_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_ids` <a name="reset_tool_ids" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds"></a>

```python
def reset_tool_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput">tool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds">tool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_ids_input`<sup>Optional</sup> <a name="tool_ids_input" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```python
tool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `tool_ids`<sup>Required</sup> <a name="tool_ids" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds"></a>

```python
tool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentToolsets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>

---


### CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### CesAgentTransferRulesDeterministicTransferOutputReference <a name="CesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">put_expression_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">put_python_code_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">reset_expression_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">reset_python_code_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expression_condition` <a name="put_expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```python
def put_expression_condition(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.expression"></a>

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

##### `put_python_code_condition` <a name="put_python_code_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```python
def put_python_code_condition(
  python_code: str
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.pythonCode"></a>

- *Type:* str

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `reset_expression_condition` <a name="reset_expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```python
def reset_expression_condition() -> None
```

##### `reset_python_code_condition` <a name="reset_python_code_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```python
def reset_python_code_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">python_code_condition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">expression_condition_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">python_code_condition_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```python
expression_condition: CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `python_code_condition`<sup>Required</sup> <a name="python_code_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```python
python_code_condition: CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `expression_condition_input`<sup>Optional</sup> <a name="expression_condition_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```python
expression_condition_input: CesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `python_code_condition_input`<sup>Optional</sup> <a name="python_code_condition_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```python
python_code_condition_input: CesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---


### CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">put_expression_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expression_condition` <a name="put_expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```python
def put_expression_condition(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.expression"></a>

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">expression_condition_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```python
expression_condition: CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `expression_condition_input`<sup>Optional</sup> <a name="expression_condition_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```python
expression_condition_input: CesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```python
internal_value: CesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---


### CesAgentTransferRulesList <a name="CesAgentTransferRulesList" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAgentTransferRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAgentTransferRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>]

---


### CesAgentTransferRulesOutputReference <a name="CesAgentTransferRulesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_agent

cesAgent.CesAgentTransferRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer">put_deterministic_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer">put_disable_planner_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer">reset_deterministic_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">reset_disable_planner_transfer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deterministic_transfer` <a name="put_deterministic_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```python
def put_deterministic_transfer(
  expression_condition: CesAgentTransferRulesDeterministicTransferExpressionCondition = None,
  python_code_condition: CesAgentTransferRulesDeterministicTransferPythonCodeCondition = None
) -> None
```

###### `expression_condition`<sup>Optional</sup> <a name="expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.expressionCondition"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

###### `python_code_condition`<sup>Optional</sup> <a name="python_code_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.pythonCodeCondition"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code_condition CesAgent#python_code_condition}

---

##### `put_disable_planner_transfer` <a name="put_disable_planner_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```python
def put_disable_planner_transfer(
  expression_condition: CesAgentTransferRulesDisablePlannerTransferExpressionCondition
) -> None
```

###### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.expressionCondition"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

##### `reset_deterministic_transfer` <a name="reset_deterministic_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```python
def reset_deterministic_transfer() -> None
```

##### `reset_disable_planner_transfer` <a name="reset_disable_planner_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```python
def reset_disable_planner_transfer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer">deterministic_transfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer">disable_planner_transfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput">child_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput">deterministic_transfer_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">disable_planner_transfer_input</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent">child_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deterministic_transfer`<sup>Required</sup> <a name="deterministic_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```python
deterministic_transfer: CesAgentTransferRulesDeterministicTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `disable_planner_transfer`<sup>Required</sup> <a name="disable_planner_transfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```python
disable_planner_transfer: CesAgentTransferRulesDisablePlannerTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `child_agent_input`<sup>Optional</sup> <a name="child_agent_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```python
child_agent_input: str
```

- *Type:* str

---

##### `deterministic_transfer_input`<sup>Optional</sup> <a name="deterministic_transfer_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```python
deterministic_transfer_input: CesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disable_planner_transfer_input`<sup>Optional</sup> <a name="disable_planner_transfer_input" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```python
disable_planner_transfer_input: CesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `child_agent`<sup>Required</sup> <a name="child_agent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent"></a>

```python
child_agent: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAgentTransferRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>

---




# `cesAgent` Submodule <a name="`cesAgent` Submodule" id="@cdktn/provider-google.cesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesAgent <a name="CesAgent" id="@cdktn/provider-google.cesAgent.CesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgent;

CesAgent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .afterAgentCallbacks(IResolvable|java.util.List<CesAgentAfterAgentCallbacks>)
//  .afterModelCallbacks(IResolvable|java.util.List<CesAgentAfterModelCallbacks>)
//  .afterToolCallbacks(IResolvable|java.util.List<CesAgentAfterToolCallbacks>)
//  .agentId(java.lang.String)
//  .beforeAgentCallbacks(IResolvable|java.util.List<CesAgentBeforeAgentCallbacks>)
//  .beforeModelCallbacks(IResolvable|java.util.List<CesAgentBeforeModelCallbacks>)
//  .beforeToolCallbacks(IResolvable|java.util.List<CesAgentBeforeToolCallbacks>)
//  .childAgents(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .instruction(java.lang.String)
//  .llmAgent(CesAgentLlmAgent)
//  .modelSettings(CesAgentModelSettings)
//  .project(java.lang.String)
//  .remoteA2AAgent(CesAgentRemoteA2AAgent)
//  .remoteDialogflowAgent(CesAgentRemoteDialogflowAgent)
//  .timeouts(CesAgentTimeouts)
//  .tools(java.util.List<java.lang.String>)
//  .toolsets(IResolvable|java.util.List<CesAgentToolsets>)
//  .transferRules(IResolvable|java.util.List<CesAgentTransferRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>></code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterModelCallbacks">afterModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>></code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterToolCallbacks">afterToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>></code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>></code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>></code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>></code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.childAgents">childAgents</a></code> | <code>java.util.List<java.lang.String></code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.instruction">instruction</a></code> | <code>java.lang.String</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.toolsets">toolsets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>></code> | toolsets block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.transferRules">transferRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>></code> | transfer_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}

---

##### `afterAgentCallbacks`<sup>Optional</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterAgentCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>>

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}

---

##### `afterModelCallbacks`<sup>Optional</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterModelCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>>

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}

---

##### `afterToolCallbacks`<sup>Optional</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.afterToolCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>>

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}

---

##### `beforeAgentCallbacks`<sup>Optional</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeAgentCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>>

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}

---

##### `beforeModelCallbacks`<sup>Optional</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeModelCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>>

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}

---

##### `beforeToolCallbacks`<sup>Optional</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.beforeToolCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>>

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}

---

##### `childAgents`<sup>Optional</sup> <a name="childAgents" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.childAgents"></a>

- *Type:* java.util.List<java.lang.String>

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.guardrails"></a>

- *Type:* java.util.List<java.lang.String>

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.instruction"></a>

- *Type:* java.lang.String

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}

---

##### `llmAgent`<sup>Optional</sup> <a name="llmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.llmAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}.

---

##### `remoteA2AAgent`<sup>Optional</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteA2AAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}

---

##### `remoteDialogflowAgent`<sup>Optional</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.remoteDialogflowAgent"></a>

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

- *Type:* java.util.List<java.lang.String>

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.toolsets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>>

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}

---

##### `transferRules`<sup>Optional</sup> <a name="transferRules" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.transferRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>>

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks">putAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks">putAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks">putAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks">putBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks">putBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks">putBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent">putLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent">putRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent">putRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putToolsets">putToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTransferRules">putTransferRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks">resetAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks">resetAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks">resetAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks">resetBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks">resetBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks">resetBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents">resetChildAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent">resetLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent">resetRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent">resetRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTools">resetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetToolsets">resetToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules">resetTransferRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesAgent.CesAgent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesAgent.CesAgent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesAgent.CesAgent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesAgent.CesAgent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterAgentCallbacks` <a name="putAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks"></a>

```java
public void putAfterAgentCallbacks(IResolvable|java.util.List<CesAgentAfterAgentCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>>

---

##### `putAfterModelCallbacks` <a name="putAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks"></a>

```java
public void putAfterModelCallbacks(IResolvable|java.util.List<CesAgentAfterModelCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>>

---

##### `putAfterToolCallbacks` <a name="putAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks"></a>

```java
public void putAfterToolCallbacks(IResolvable|java.util.List<CesAgentAfterToolCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>>

---

##### `putBeforeAgentCallbacks` <a name="putBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks"></a>

```java
public void putBeforeAgentCallbacks(IResolvable|java.util.List<CesAgentBeforeAgentCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>>

---

##### `putBeforeModelCallbacks` <a name="putBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks"></a>

```java
public void putBeforeModelCallbacks(IResolvable|java.util.List<CesAgentBeforeModelCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>>

---

##### `putBeforeToolCallbacks` <a name="putBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks"></a>

```java
public void putBeforeToolCallbacks(IResolvable|java.util.List<CesAgentBeforeToolCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>>

---

##### `putLlmAgent` <a name="putLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent"></a>

```java
public void putLlmAgent(CesAgentLlmAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings"></a>

```java
public void putModelSettings(CesAgentModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `putRemoteA2AAgent` <a name="putRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent"></a>

```java
public void putRemoteA2AAgent(CesAgentRemoteA2AAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `putRemoteDialogflowAgent` <a name="putRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent"></a>

```java
public void putRemoteDialogflowAgent(CesAgentRemoteDialogflowAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts"></a>

```java
public void putTimeouts(CesAgentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---

##### `putToolsets` <a name="putToolsets" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets"></a>

```java
public void putToolsets(IResolvable|java.util.List<CesAgentToolsets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>>

---

##### `putTransferRules` <a name="putTransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules"></a>

```java
public void putTransferRules(IResolvable|java.util.List<CesAgentTransferRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>>

---

##### `resetAfterAgentCallbacks` <a name="resetAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks"></a>

```java
public void resetAfterAgentCallbacks()
```

##### `resetAfterModelCallbacks` <a name="resetAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks"></a>

```java
public void resetAfterModelCallbacks()
```

##### `resetAfterToolCallbacks` <a name="resetAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks"></a>

```java
public void resetAfterToolCallbacks()
```

##### `resetAgentId` <a name="resetAgentId" id="@cdktn/provider-google.cesAgent.CesAgent.resetAgentId"></a>

```java
public void resetAgentId()
```

##### `resetBeforeAgentCallbacks` <a name="resetBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks"></a>

```java
public void resetBeforeAgentCallbacks()
```

##### `resetBeforeModelCallbacks` <a name="resetBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks"></a>

```java
public void resetBeforeModelCallbacks()
```

##### `resetBeforeToolCallbacks` <a name="resetBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks"></a>

```java
public void resetBeforeToolCallbacks()
```

##### `resetChildAgents` <a name="resetChildAgents" id="@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents"></a>

```java
public void resetChildAgents()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails"></a>

```java
public void resetGuardrails()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesAgent.CesAgent.resetId"></a>

```java
public void resetId()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-google.cesAgent.CesAgent.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetLlmAgent` <a name="resetLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent"></a>

```java
public void resetLlmAgent()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings"></a>

```java
public void resetModelSettings()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesAgent.CesAgent.resetProject"></a>

```java
public void resetProject()
```

##### `resetRemoteA2AAgent` <a name="resetRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent"></a>

```java
public void resetRemoteA2AAgent()
```

##### `resetRemoteDialogflowAgent` <a name="resetRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent"></a>

```java
public void resetRemoteDialogflowAgent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-google.cesAgent.CesAgent.resetTools"></a>

```java
public void resetTools()
```

##### `resetToolsets` <a name="resetToolsets" id="@cdktn/provider-google.cesAgent.CesAgent.resetToolsets"></a>

```java
public void resetToolsets()
```

##### `resetTransferRules` <a name="resetTransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules"></a>

```java
public void resetTransferRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgent;

CesAgent.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgent;

CesAgent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgent;

CesAgent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgent;

CesAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CesAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CesAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary">generatedSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsets">toolsets</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRules">transferRules</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput">afterAgentCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput">afterModelCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput">afterToolCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput">beforeAgentCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput">beforeModelCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput">beforeToolCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput">childAgentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput">guardrailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput">llmAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput">remoteA2AAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput">remoteDialogflowAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput">toolsetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput">toolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput">transferRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgents">childAgents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesAgent.CesAgent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesAgent.CesAgent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `afterAgentCallbacks`<sup>Required</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks"></a>

```java
public CesAgentAfterAgentCallbacksList getAfterAgentCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a>

---

##### `afterModelCallbacks`<sup>Required</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks"></a>

```java
public CesAgentAfterModelCallbacksList getAfterModelCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a>

---

##### `afterToolCallbacks`<sup>Required</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks"></a>

```java
public CesAgentAfterToolCallbacksList getAfterToolCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a>

---

##### `beforeAgentCallbacks`<sup>Required</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks"></a>

```java
public CesAgentBeforeAgentCallbacksList getBeforeAgentCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a>

---

##### `beforeModelCallbacks`<sup>Required</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks"></a>

```java
public CesAgentBeforeModelCallbacksList getBeforeModelCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a>

---

##### `beforeToolCallbacks`<sup>Required</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks"></a>

```java
public CesAgentBeforeToolCallbacksList getBeforeToolCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesAgent.CesAgent.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesAgent.CesAgent.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `generatedSummary`<sup>Required</sup> <a name="generatedSummary" id="@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary"></a>

```java
public java.lang.String getGeneratedSummary();
```

- *Type:* java.lang.String

---

##### `llmAgent`<sup>Required</sup> <a name="llmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent"></a>

```java
public CesAgentLlmAgentOutputReference getLlmAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings"></a>

```java
public CesAgentModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteA2AAgent`<sup>Required</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent"></a>

```java
public CesAgentRemoteA2AAgentOutputReference getRemoteA2AAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a>

---

##### `remoteDialogflowAgent`<sup>Required</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent"></a>

```java
public CesAgentRemoteDialogflowAgentOutputReference getRemoteDialogflowAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeouts"></a>

```java
public CesAgentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a>

---

##### `toolsets`<sup>Required</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsets"></a>

```java
public CesAgentToolsetsList getToolsets();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a>

---

##### `transferRules`<sup>Required</sup> <a name="transferRules" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRules"></a>

```java
public CesAgentTransferRulesList getTransferRules();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesAgent.CesAgent.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `afterAgentCallbacksInput`<sup>Optional</sup> <a name="afterAgentCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput"></a>

```java
public IResolvable|java.util.List<CesAgentAfterAgentCallbacks> getAfterAgentCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>>

---

##### `afterModelCallbacksInput`<sup>Optional</sup> <a name="afterModelCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput"></a>

```java
public IResolvable|java.util.List<CesAgentAfterModelCallbacks> getAfterModelCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>>

---

##### `afterToolCallbacksInput`<sup>Optional</sup> <a name="afterToolCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput"></a>

```java
public IResolvable|java.util.List<CesAgentAfterToolCallbacks> getAfterToolCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `beforeAgentCallbacksInput`<sup>Optional</sup> <a name="beforeAgentCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeAgentCallbacks> getBeforeAgentCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>>

---

##### `beforeModelCallbacksInput`<sup>Optional</sup> <a name="beforeModelCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeModelCallbacks> getBeforeModelCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>>

---

##### `beforeToolCallbacksInput`<sup>Optional</sup> <a name="beforeToolCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeToolCallbacks> getBeforeToolCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>>

---

##### `childAgentsInput`<sup>Optional</sup> <a name="childAgentsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput"></a>

```java
public java.util.List<java.lang.String> getChildAgentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `llmAgentInput`<sup>Optional</sup> <a name="llmAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput"></a>

```java
public CesAgentLlmAgent getLlmAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput"></a>

```java
public CesAgentModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `remoteA2AAgentInput`<sup>Optional</sup> <a name="remoteA2AAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput"></a>

```java
public CesAgentRemoteA2AAgent getRemoteA2AAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `remoteDialogflowAgentInput`<sup>Optional</sup> <a name="remoteDialogflowAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput"></a>

```java
public CesAgentRemoteDialogflowAgent getRemoteDialogflowAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput"></a>

```java
public IResolvable|CesAgentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---

##### `toolsetsInput`<sup>Optional</sup> <a name="toolsetsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput"></a>

```java
public IResolvable|java.util.List<CesAgentToolsets> getToolsetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>>

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput"></a>

```java
public java.util.List<java.lang.String> getToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transferRulesInput`<sup>Optional</sup> <a name="transferRulesInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput"></a>

```java
public IResolvable|java.util.List<CesAgentTransferRules> getTransferRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgent.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `childAgents`<sup>Required</sup> <a name="childAgents" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgents"></a>

```java
public java.util.List<java.lang.String> getChildAgents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgent.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgent.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgent.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgent.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesAgentAfterAgentCallbacks <a name="CesAgentAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterAgentCallbacks;

CesAgentAfterAgentCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterModelCallbacks;

CesAgentAfterModelCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterToolCallbacks;

CesAgentAfterToolCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeAgentCallbacks;

CesAgentBeforeAgentCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeModelCallbacks;

CesAgentBeforeModelCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeToolCallbacks;

CesAgentBeforeToolCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google.ces_agent.CesAgentConfig;

CesAgentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .afterAgentCallbacks(IResolvable|java.util.List<CesAgentAfterAgentCallbacks>)
//  .afterModelCallbacks(IResolvable|java.util.List<CesAgentAfterModelCallbacks>)
//  .afterToolCallbacks(IResolvable|java.util.List<CesAgentAfterToolCallbacks>)
//  .agentId(java.lang.String)
//  .beforeAgentCallbacks(IResolvable|java.util.List<CesAgentBeforeAgentCallbacks>)
//  .beforeModelCallbacks(IResolvable|java.util.List<CesAgentBeforeModelCallbacks>)
//  .beforeToolCallbacks(IResolvable|java.util.List<CesAgentBeforeToolCallbacks>)
//  .childAgents(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .instruction(java.lang.String)
//  .llmAgent(CesAgentLlmAgent)
//  .modelSettings(CesAgentModelSettings)
//  .project(java.lang.String)
//  .remoteA2AAgent(CesAgentRemoteA2AAgent)
//  .remoteDialogflowAgent(CesAgentRemoteDialogflowAgent)
//  .timeouts(CesAgentTimeouts)
//  .tools(java.util.List<java.lang.String>)
//  .toolsets(IResolvable|java.util.List<CesAgentToolsets>)
//  .transferRules(IResolvable|java.util.List<CesAgentTransferRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>></code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>></code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>></code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>></code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>></code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>></code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents">childAgents</a></code> | <code>java.util.List<java.lang.String></code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets">toolsets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>></code> | toolsets block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules">transferRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>></code> | transfer_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}

---

##### `afterAgentCallbacks`<sup>Optional</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks"></a>

```java
public IResolvable|java.util.List<CesAgentAfterAgentCallbacks> getAfterAgentCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>>

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}

---

##### `afterModelCallbacks`<sup>Optional</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks"></a>

```java
public IResolvable|java.util.List<CesAgentAfterModelCallbacks> getAfterModelCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>>

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}

---

##### `afterToolCallbacks`<sup>Optional</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks"></a>

```java
public IResolvable|java.util.List<CesAgentAfterToolCallbacks> getAfterToolCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>>

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}

---

##### `beforeAgentCallbacks`<sup>Optional</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeAgentCallbacks> getBeforeAgentCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>>

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}

---

##### `beforeModelCallbacks`<sup>Optional</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeModelCallbacks> getBeforeModelCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>>

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}

---

##### `beforeToolCallbacks`<sup>Optional</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeToolCallbacks> getBeforeToolCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>>

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}

---

##### `childAgents`<sup>Optional</sup> <a name="childAgents" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents"></a>

```java
public java.util.List<java.lang.String> getChildAgents();
```

- *Type:* java.util.List<java.lang.String>

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

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

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}

---

##### `llmAgent`<sup>Optional</sup> <a name="llmAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent"></a>

```java
public CesAgentLlmAgent getLlmAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings"></a>

```java
public CesAgentModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}.

---

##### `remoteA2AAgent`<sup>Optional</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent"></a>

```java
public CesAgentRemoteA2AAgent getRemoteA2AAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}

---

##### `remoteDialogflowAgent`<sup>Optional</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent"></a>

```java
public CesAgentRemoteDialogflowAgent getRemoteDialogflowAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts"></a>

```java
public CesAgentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#timeouts CesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets"></a>

```java
public IResolvable|java.util.List<CesAgentToolsets> getToolsets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>>

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}

---

##### `transferRules`<sup>Optional</sup> <a name="transferRules" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules"></a>

```java
public IResolvable|java.util.List<CesAgentTransferRules> getTransferRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>>

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}

---

### CesAgentLlmAgent <a name="CesAgentLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentLlmAgent;

CesAgentLlmAgent.builder()
    .build();
```


### CesAgentModelSettings <a name="CesAgentModelSettings" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentModelSettings;

CesAgentModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model CesAgent#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#temperature CesAgent#temperature}

---

### CesAgentRemoteA2AAgent <a name="CesAgentRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgent;

CesAgentRemoteA2AAgent.builder()
    .a2AConfig(CesAgentRemoteA2AAgentA2AConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfig getA2AConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#a2a_config CesAgent#a2a_config}

---

### CesAgentRemoteA2AAgentA2AConfig <a name="CesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfig;

CesAgentRemoteA2AAgentA2AConfig.builder()
//  .agentCard(CesAgentRemoteA2AAgentA2AConfigAgentCard)
//  .agentRegistry(java.lang.String)
//  .apiAuthentication(CesAgentRemoteA2AAgentA2AConfigApiAuthentication)
//  .contextId(java.lang.String)
//  .inputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .outputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .streamingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">agentRegistry</a></code> | <code>java.lang.String</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId">contextId</a></code> | <code>java.lang.String</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">streamingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `agentCard`<sup>Optional</sup> <a name="agentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCard getAgentCard();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_card CesAgent#agent_card}

---

##### `agentRegistry`<sup>Optional</sup> <a name="agentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```java
public java.lang.String getAgentRegistry();
```

- *Type:* java.lang.String

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_registry CesAgent#agent_registry}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthentication getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_authentication CesAgent#api_authentication}

---

##### `contextId`<sup>Optional</sup> <a name="contextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```java
public java.lang.String getContextId();
```

- *Type:* java.lang.String

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#context_id CesAgent#context_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `streamingEnabled`<sup>Optional</sup> <a name="streamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getStreamingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#streaming_enabled CesAgent#streaming_enabled}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCard <a name="CesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCard;

CesAgentRemoteA2AAgentA2AConfigAgentCard.builder()
    .description(java.lang.String)
    .name(java.lang.String)
    .skills(IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSkills>)
    .supportedInterfaces(IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces>)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">description</a></code> | <code>java.lang.String</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">skills</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>></code> | skills block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">supportedInterfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>></code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">version</a></code> | <code>java.lang.String</code> | The version of the agent. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```java
public IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSkills> getSkills();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#skills CesAgent#skills}

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```java
public IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> getSupportedInterfaces();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#supported_interfaces CesAgent#supported_interfaces}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#version CesAgent#version}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills;

CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.builder()
    .description(java.lang.String)
    .id(java.lang.String)
    .name(java.lang.String)
    .tags(java.util.List<java.lang.String>)
//  .examples(java.util.List<java.lang.String>)
//  .inputModes(java.util.List<java.lang.String>)
//  .outputModes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">id</a></code> | <code>java.lang.String</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">inputModes</a></code> | <code>java.util.List<java.lang.String></code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">outputModes</a></code> | <code>java.util.List<java.lang.String></code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tags CesAgent#tags}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#examples CesAgent#examples}

---

##### `inputModes`<sup>Optional</sup> <a name="inputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```java
public java.util.List<java.lang.String> getInputModes();
```

- *Type:* java.util.List<java.lang.String>

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_modes CesAgent#input_modes}

---

##### `outputModes`<sup>Optional</sup> <a name="outputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```java
public java.util.List<java.lang.String> getOutputModes();
```

- *Type:* java.util.List<java.lang.String>

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_modes CesAgent#output_modes}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces;

CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.builder()
    .protocolBinding(java.lang.String)
    .protocolVersion(java.lang.String)
    .url(java.lang.String)
//  .tenant(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">url</a></code> | <code>java.lang.String</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">tenant</a></code> | <code>java.lang.String</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_binding CesAgent#protocol_binding}

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_version CesAgent#protocol_version}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#url CesAgent#url}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tenant CesAgent#tenant}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication;

CesAgentRemoteA2AAgentA2AConfigApiAuthentication.builder()
//  .apiKeyConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig)
//  .bearerTokenConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig)
//  .oauthConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig)
//  .serviceAccountAuthConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_config CesAgent#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#bearer_token_config CesAgent#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_config CesAgent#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account_auth_config CesAgent#service_account_auth_config}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;

CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.builder()
    .apiKeySecretVersion(java.lang.String)
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_secret_version CesAgent#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#key_name CesAgent#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#request_location CesAgent#request_location}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;

CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.builder()
    .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token CesAgent#token}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;

CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .clientSecretVersion(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_id CesAgent#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_secret_version CesAgent#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_grant_type CesAgent#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token_endpoint CesAgent#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;

CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.builder()
    .serviceAccount(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

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

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteDialogflowAgent <a name="CesAgentRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteDialogflowAgent;

CesAgentRemoteDialogflowAgent.builder()
    .agent(java.lang.String)
    .flowId(java.lang.String)
//  .environmentId(java.lang.String)
//  .inputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .languageCodeVariable(java.lang.String)
//  .outputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .respectResponseInterruptionSettings(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent">agent</a></code> | <code>java.lang.String</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId">flowId</a></code> | <code>java.lang.String</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable">languageCodeVariable</a></code> | <code>java.lang.String</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent CesAgent#agent}

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#flow_id CesAgent#flow_id}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#environment_id CesAgent#environment_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `languageCodeVariable`<sup>Optional</sup> <a name="languageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```java
public java.lang.String getLanguageCodeVariable();
```

- *Type:* java.lang.String

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#language_code_variable CesAgent#language_code_variable}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `respectResponseInterruptionSettings`<sup>Optional</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```java
public java.lang.Boolean|IResolvable getRespectResponseInterruptionSettings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}

---

### CesAgentTimeouts <a name="CesAgentTimeouts" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTimeouts;

CesAgentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}.

---

### CesAgentToolsets <a name="CesAgentToolsets" id="@cdktn/provider-google.cesAgent.CesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentToolsets;

CesAgentToolsets.builder()
    .toolset(java.lang.String)
//  .toolIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset">toolset</a></code> | <code>java.lang.String</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds">toolIds</a></code> | <code>java.util.List<java.lang.String></code> | The tools IDs to filter the toolset. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolset CesAgent#toolset}

---

##### `toolIds`<sup>Optional</sup> <a name="toolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds"></a>

```java
public java.util.List<java.lang.String> getToolIds();
```

- *Type:* java.util.List<java.lang.String>

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tool_ids CesAgent#tool_ids}

---

### CesAgentTransferRules <a name="CesAgentTransferRules" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRules;

CesAgentTransferRules.builder()
    .childAgent(java.lang.String)
    .direction(java.lang.String)
//  .deterministicTransfer(CesAgentTransferRulesDeterministicTransfer)
//  .disablePlannerTransfer(CesAgentTransferRulesDisablePlannerTransfer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent">childAgent</a></code> | <code>java.lang.String</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent"></a>

```java
public java.lang.String getChildAgent();
```

- *Type:* java.lang.String

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agent CesAgent#child_agent}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#direction CesAgent#direction}

---

##### `deterministicTransfer`<sup>Optional</sup> <a name="deterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer"></a>

```java
public CesAgentTransferRulesDeterministicTransfer getDeterministicTransfer();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deterministic_transfer CesAgent#deterministic_transfer}

---

##### `disablePlannerTransfer`<sup>Optional</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer"></a>

```java
public CesAgentTransferRulesDisablePlannerTransfer getDisablePlannerTransfer();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disable_planner_transfer CesAgent#disable_planner_transfer}

---

### CesAgentTransferRulesDeterministicTransfer <a name="CesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDeterministicTransfer;

CesAgentTransferRulesDeterministicTransfer.builder()
//  .expressionCondition(CesAgentTransferRulesDeterministicTransferExpressionCondition)
//  .pythonCodeCondition(CesAgentTransferRulesDeterministicTransferPythonCodeCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `expressionCondition`<sup>Optional</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```java
public CesAgentTransferRulesDeterministicTransferExpressionCondition getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

##### `pythonCodeCondition`<sup>Optional</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```java
public CesAgentTransferRulesDeterministicTransferPythonCodeCondition getPythonCodeCondition();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code_condition CesAgent#python_code_condition}

---

### CesAgentTransferRulesDeterministicTransferExpressionCondition <a name="CesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDeterministicTransferExpressionCondition;

CesAgentTransferRulesDeterministicTransferExpressionCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

### CesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="CesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition;

CesAgentTransferRulesDeterministicTransferPythonCodeCondition.builder()
    .pythonCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

### CesAgentTransferRulesDisablePlannerTransfer <a name="CesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDisablePlannerTransfer;

CesAgentTransferRulesDisablePlannerTransfer.builder()
    .expressionCondition(CesAgentTransferRulesDisablePlannerTransferExpressionCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```java
public CesAgentTransferRulesDisablePlannerTransferExpressionCondition getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

### CesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="CesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition;

CesAgentTransferRulesDisablePlannerTransferExpressionCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAgentAfterAgentCallbacksList <a name="CesAgentAfterAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterAgentCallbacksList;

new CesAgentAfterAgentCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get"></a>

```java
public CesAgentAfterAgentCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentAfterAgentCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>>

---


### CesAgentAfterAgentCallbacksOutputReference <a name="CesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterAgentCallbacksOutputReference;

new CesAgentAfterAgentCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentAfterAgentCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>

---


### CesAgentAfterModelCallbacksList <a name="CesAgentAfterModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterModelCallbacksList;

new CesAgentAfterModelCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get"></a>

```java
public CesAgentAfterModelCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentAfterModelCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>>

---


### CesAgentAfterModelCallbacksOutputReference <a name="CesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterModelCallbacksOutputReference;

new CesAgentAfterModelCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentAfterModelCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>

---


### CesAgentAfterToolCallbacksList <a name="CesAgentAfterToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterToolCallbacksList;

new CesAgentAfterToolCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get"></a>

```java
public CesAgentAfterToolCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentAfterToolCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>>

---


### CesAgentAfterToolCallbacksOutputReference <a name="CesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentAfterToolCallbacksOutputReference;

new CesAgentAfterToolCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentAfterToolCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>

---


### CesAgentBeforeAgentCallbacksList <a name="CesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeAgentCallbacksList;

new CesAgentBeforeAgentCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get"></a>

```java
public CesAgentBeforeAgentCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeAgentCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>>

---


### CesAgentBeforeAgentCallbacksOutputReference <a name="CesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeAgentCallbacksOutputReference;

new CesAgentBeforeAgentCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentBeforeAgentCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>

---


### CesAgentBeforeModelCallbacksList <a name="CesAgentBeforeModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeModelCallbacksList;

new CesAgentBeforeModelCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get"></a>

```java
public CesAgentBeforeModelCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeModelCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>>

---


### CesAgentBeforeModelCallbacksOutputReference <a name="CesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeModelCallbacksOutputReference;

new CesAgentBeforeModelCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentBeforeModelCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>

---


### CesAgentBeforeToolCallbacksList <a name="CesAgentBeforeToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeToolCallbacksList;

new CesAgentBeforeToolCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get"></a>

```java
public CesAgentBeforeToolCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentBeforeToolCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>>

---


### CesAgentBeforeToolCallbacksOutputReference <a name="CesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentBeforeToolCallbacksOutputReference;

new CesAgentBeforeToolCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentBeforeToolCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>

---


### CesAgentLlmAgentOutputReference <a name="CesAgentLlmAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentLlmAgentOutputReference;

new CesAgentLlmAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue"></a>

```java
public CesAgentLlmAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---


### CesAgentModelSettingsOutputReference <a name="CesAgentModelSettingsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentModelSettingsOutputReference;

new CesAgentModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue"></a>

```java
public CesAgentModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference;

new CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">putSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">putSupportedInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkills` <a name="putSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```java
public void putSkills(IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSkills> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

---

##### `putSupportedInterfaces` <a name="putSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```java
public void putSupportedInterfaces(IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">supportedInterfaces</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">skillsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">supportedInterfacesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList getSkills();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList getSupportedInterfaces();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `skillsInput`<sup>Optional</sup> <a name="skillsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```java
public IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSkills> getSkillsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

---

##### `supportedInterfacesInput`<sup>Optional</sup> <a name="supportedInterfacesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```java
public IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> getSupportedInterfacesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCard getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList;

new CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSkills> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference;

new CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">resetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">resetInputModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">resetOutputModes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExamples` <a name="resetExamples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```java
public void resetExamples()
```

##### `resetInputModes` <a name="resetInputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```java
public void resetInputModes()
```

##### `resetOutputModes` <a name="resetOutputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```java
public void resetOutputModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">examplesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">inputModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">outputModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">inputModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">outputModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `examplesInput`<sup>Optional</sup> <a name="examplesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```java
public java.util.List<java.lang.String> getExamplesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputModesInput`<sup>Optional</sup> <a name="inputModesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```java
public java.util.List<java.lang.String> getInputModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputModesInput`<sup>Optional</sup> <a name="outputModesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```java
public java.util.List<java.lang.String> getOutputModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputModes`<sup>Required</sup> <a name="inputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```java
public java.util.List<java.lang.String> getInputModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputModes`<sup>Required</sup> <a name="outputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```java
public java.util.List<java.lang.String> getOutputModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentRemoteA2AAgentA2AConfigAgentCardSkills getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList;

new CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference;

new CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">resetTenant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```java
public void resetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">protocolBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">tenantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocolBindingInput`<sup>Optional</sup> <a name="protocolBindingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```java
public java.lang.String getProtocolBindingInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```java
public java.lang.String getTenantInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference;

new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```java
public java.lang.String getApiKeySecretVersionInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference;

new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference;

new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```java
public java.lang.String getClientSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference;

new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```java
public void putServiceAccountAuthConfig(CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```java
public void resetServiceAccountAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference;

new CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentA2AConfigOutputReference;

new CesAgentRemoteA2AAgentA2AConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">putAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">resetAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">resetAgentRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">resetContextId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">resetStreamingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCard` <a name="putAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```java
public void putAgentCard(CesAgentRemoteA2AAgentA2AConfigAgentCard value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```java
public void putApiAuthentication(CesAgentRemoteA2AAgentA2AConfigApiAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `resetAgentCard` <a name="resetAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```java
public void resetAgentCard()
```

##### `resetAgentRegistry` <a name="resetAgentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```java
public void resetAgentRegistry()
```

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```java
public void resetApiAuthentication()
```

##### `resetContextId` <a name="resetContextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```java
public void resetContextId()
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```java
public void resetInputVariableMapping()
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```java
public void resetOutputVariableMapping()
```

##### `resetStreamingEnabled` <a name="resetStreamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```java
public void resetStreamingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">agentCardInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">agentRegistryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">contextIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">streamingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">agentRegistry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">contextId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">streamingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentCard`<sup>Required</sup> <a name="agentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference getAgentCard();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `agentCardInput`<sup>Optional</sup> <a name="agentCardInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigAgentCard getAgentCardInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `agentRegistryInput`<sup>Optional</sup> <a name="agentRegistryInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```java
public java.lang.String getAgentRegistryInput();
```

- *Type:* java.lang.String

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigApiAuthentication getApiAuthenticationInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `contextIdInput`<sup>Optional</sup> <a name="contextIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```java
public java.lang.String getContextIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `streamingEnabledInput`<sup>Optional</sup> <a name="streamingEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getStreamingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `agentRegistry`<sup>Required</sup> <a name="agentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```java
public java.lang.String getAgentRegistry();
```

- *Type:* java.lang.String

---

##### `contextId`<sup>Required</sup> <a name="contextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```java
public java.lang.String getContextId();
```

- *Type:* java.lang.String

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `streamingEnabled`<sup>Required</sup> <a name="streamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getStreamingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgentA2AConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


### CesAgentRemoteA2AAgentOutputReference <a name="CesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteA2AAgentOutputReference;

new CesAgentRemoteA2AAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig">putA2AConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putA2AConfig` <a name="putA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```java
public void putA2AConfig(CesAgentRemoteA2AAgentA2AConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">a2AConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```java
public CesAgentRemoteA2AAgentA2AConfigOutputReference getA2AConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `a2AConfigInput`<sup>Optional</sup> <a name="a2AConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```java
public CesAgentRemoteA2AAgentA2AConfig getA2AConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteA2AAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---


### CesAgentRemoteDialogflowAgentOutputReference <a name="CesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentRemoteDialogflowAgentOutputReference;

new CesAgentRemoteDialogflowAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">resetLanguageCodeVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">resetRespectResponseInterruptionSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```java
public void resetInputVariableMapping()
```

##### `resetLanguageCodeVariable` <a name="resetLanguageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```java
public void resetLanguageCodeVariable()
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```java
public void resetOutputVariableMapping()
```

##### `resetRespectResponseInterruptionSettings` <a name="resetRespectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```java
public void resetRespectResponseInterruptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput">agentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">languageCodeVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">respectResponseInterruptionSettingsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent">agent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">languageCodeVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```java
public java.lang.String getAgentInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```java
public java.lang.String getFlowIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `languageCodeVariableInput`<sup>Optional</sup> <a name="languageCodeVariableInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```java
public java.lang.String getLanguageCodeVariableInput();
```

- *Type:* java.lang.String

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `respectResponseInterruptionSettingsInput`<sup>Optional</sup> <a name="respectResponseInterruptionSettingsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```java
public java.lang.Boolean|IResolvable getRespectResponseInterruptionSettingsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `languageCodeVariable`<sup>Required</sup> <a name="languageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```java
public java.lang.String getLanguageCodeVariable();
```

- *Type:* java.lang.String

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `respectResponseInterruptionSettings`<sup>Required</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```java
public java.lang.Boolean|IResolvable getRespectResponseInterruptionSettings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```java
public CesAgentRemoteDialogflowAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---


### CesAgentTimeoutsOutputReference <a name="CesAgentTimeoutsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTimeoutsOutputReference;

new CesAgentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---


### CesAgentToolsetsList <a name="CesAgentToolsetsList" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentToolsetsList;

new CesAgentToolsetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get"></a>

```java
public CesAgentToolsetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentToolsets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>>

---


### CesAgentToolsetsOutputReference <a name="CesAgentToolsetsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentToolsetsOutputReference;

new CesAgentToolsetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds">resetToolIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolIds` <a name="resetToolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds"></a>

```java
public void resetToolIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput">toolIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds">toolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset">toolset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolIdsInput`<sup>Optional</sup> <a name="toolIdsInput" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```java
public java.util.List<java.lang.String> getToolIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput"></a>

```java
public java.lang.String getToolsetInput();
```

- *Type:* java.lang.String

---

##### `toolIds`<sup>Required</sup> <a name="toolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds"></a>

```java
public java.util.List<java.lang.String> getToolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentToolsets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>

---


### CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference;

new CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```java
public CesAgentTransferRulesDeterministicTransferExpressionCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### CesAgentTransferRulesDeterministicTransferOutputReference <a name="CesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDeterministicTransferOutputReference;

new CesAgentTransferRulesDeterministicTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">putPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">resetExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">resetPythonCodeCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```java
public void putExpressionCondition(CesAgentTransferRulesDeterministicTransferExpressionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `putPythonCodeCondition` <a name="putPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```java
public void putPythonCodeCondition(CesAgentTransferRulesDeterministicTransferPythonCodeCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `resetExpressionCondition` <a name="resetExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```java
public void resetExpressionCondition()
```

##### `resetPythonCodeCondition` <a name="resetPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```java
public void resetPythonCodeCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">pythonCodeConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```java
public CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `pythonCodeCondition`<sup>Required</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```java
public CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference getPythonCodeCondition();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```java
public CesAgentTransferRulesDeterministicTransferExpressionCondition getExpressionConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `pythonCodeConditionInput`<sup>Optional</sup> <a name="pythonCodeConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```java
public CesAgentTransferRulesDeterministicTransferPythonCodeCondition getPythonCodeConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```java
public CesAgentTransferRulesDeterministicTransfer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---


### CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference;

new CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```java
public CesAgentTransferRulesDeterministicTransferPythonCodeCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference;

new CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```java
public CesAgentTransferRulesDisablePlannerTransferExpressionCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesDisablePlannerTransferOutputReference;

new CesAgentTransferRulesDisablePlannerTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```java
public void putExpressionCondition(CesAgentTransferRulesDisablePlannerTransferExpressionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```java
public CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```java
public CesAgentTransferRulesDisablePlannerTransferExpressionCondition getExpressionConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```java
public CesAgentTransferRulesDisablePlannerTransfer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---


### CesAgentTransferRulesList <a name="CesAgentTransferRulesList" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesList;

new CesAgentTransferRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get"></a>

```java
public CesAgentTransferRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAgentTransferRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>>

---


### CesAgentTransferRulesOutputReference <a name="CesAgentTransferRulesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_agent.CesAgentTransferRulesOutputReference;

new CesAgentTransferRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer">putDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer">putDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer">resetDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">resetDisablePlannerTransfer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeterministicTransfer` <a name="putDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```java
public void putDeterministicTransfer(CesAgentTransferRulesDeterministicTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `putDisablePlannerTransfer` <a name="putDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```java
public void putDisablePlannerTransfer(CesAgentTransferRulesDisablePlannerTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `resetDeterministicTransfer` <a name="resetDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```java
public void resetDeterministicTransfer()
```

##### `resetDisablePlannerTransfer` <a name="resetDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```java
public void resetDisablePlannerTransfer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput">childAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput">deterministicTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">disablePlannerTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent">childAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deterministicTransfer`<sup>Required</sup> <a name="deterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```java
public CesAgentTransferRulesDeterministicTransferOutputReference getDeterministicTransfer();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `disablePlannerTransfer`<sup>Required</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```java
public CesAgentTransferRulesDisablePlannerTransferOutputReference getDisablePlannerTransfer();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `childAgentInput`<sup>Optional</sup> <a name="childAgentInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```java
public java.lang.String getChildAgentInput();
```

- *Type:* java.lang.String

---

##### `deterministicTransferInput`<sup>Optional</sup> <a name="deterministicTransferInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```java
public CesAgentTransferRulesDeterministicTransfer getDeterministicTransferInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `disablePlannerTransferInput`<sup>Optional</sup> <a name="disablePlannerTransferInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```java
public CesAgentTransferRulesDisablePlannerTransfer getDisablePlannerTransferInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent"></a>

```java
public java.lang.String getChildAgent();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAgentTransferRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>

---




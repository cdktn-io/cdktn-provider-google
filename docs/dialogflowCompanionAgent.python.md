# `dialogflowCompanionAgent` Submodule <a name="`dialogflowCompanionAgent` Submodule" id="@cdktn/provider-google.dialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCompanionAgent <a name="DialogflowCompanionAgent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  companion_agent_id: str,
  location: str,
  ces_tool_specs: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecs] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  skill_configs: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigs] = None,
  timeouts: DialogflowCompanionAgentTimeouts = None,
  toolset_tools: IResolvable | typing.List[DialogflowCompanionAgentToolsetTools] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.companionAgentId">companion_agent_id</a></code> | <code>str</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.cesToolSpecs">ces_tool_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.skillConfigs">skill_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.toolsetTools">toolset_tools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]</code> | toolset_tools block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `companion_agent_id`<sup>Required</sup> <a name="companion_agent_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.companionAgentId"></a>

- *Type:* str

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#companion_agent_id DialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.location"></a>

- *Type:* str

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#location DialogflowCompanionAgent#location}

---

##### `ces_tool_specs`<sup>Optional</sup> <a name="ces_tool_specs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.cesToolSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool_specs DialogflowCompanionAgent#ces_tool_specs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#deletion_policy DialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.description"></a>

- *Type:* str

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}.

---

##### `skill_configs`<sup>Optional</sup> <a name="skill_configs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.skillConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_configs DialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#timeouts DialogflowCompanionAgent#timeouts}

---

##### `toolset_tools`<sup>Optional</sup> <a name="toolset_tools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.toolsetTools"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset_tools DialogflowCompanionAgent#toolset_tools}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs">put_ces_tool_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs">put_skill_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools">put_toolset_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetCesToolSpecs">reset_ces_tool_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetSkillConfigs">reset_skill_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetToolsetTools">reset_toolset_tools</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ces_tool_specs` <a name="put_ces_tool_specs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs"></a>

```python
def put_ces_tool_specs(
  value: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]

---

##### `put_skill_configs` <a name="put_skill_configs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs"></a>

```python
def put_skill_configs(
  value: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}.

---

##### `put_toolset_tools` <a name="put_toolset_tools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools"></a>

```python
def put_toolset_tools(
  value: IResolvable | typing.List[DialogflowCompanionAgentToolsetTools]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]

---

##### `reset_ces_tool_specs` <a name="reset_ces_tool_specs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetCesToolSpecs"></a>

```python
def reset_ces_tool_specs() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_skill_configs` <a name="reset_skill_configs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetSkillConfigs"></a>

```python
def reset_skill_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_toolset_tools` <a name="reset_toolset_tools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetToolsetTools"></a>

```python
def reset_toolset_tools() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowCompanionAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecs">ces_tool_specs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList">DialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigs">skill_configs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList">DialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference">DialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetTools">toolset_tools</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList">DialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecsInput">ces_tool_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentIdInput">companion_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigsInput">skill_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetToolsInput">toolset_tools_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentId">companion_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ces_tool_specs`<sup>Required</sup> <a name="ces_tool_specs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecs"></a>

```python
ces_tool_specs: DialogflowCompanionAgentCesToolSpecsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList">DialogflowCompanionAgentCesToolSpecsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `skill_configs`<sup>Required</sup> <a name="skill_configs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigs"></a>

```python
skill_configs: DialogflowCompanionAgentSkillConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList">DialogflowCompanionAgentSkillConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeouts"></a>

```python
timeouts: DialogflowCompanionAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference">DialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `toolset_tools`<sup>Required</sup> <a name="toolset_tools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetTools"></a>

```python
toolset_tools: DialogflowCompanionAgentToolsetToolsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList">DialogflowCompanionAgentToolsetToolsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `ces_tool_specs_input`<sup>Optional</sup> <a name="ces_tool_specs_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```python
ces_tool_specs_input: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]

---

##### `companion_agent_id_input`<sup>Optional</sup> <a name="companion_agent_id_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentIdInput"></a>

```python
companion_agent_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `skill_configs_input`<sup>Optional</sup> <a name="skill_configs_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigsInput"></a>

```python
skill_configs_input: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DialogflowCompanionAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

---

##### `toolset_tools_input`<sup>Optional</sup> <a name="toolset_tools_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetToolsInput"></a>

```python
toolset_tools_input: IResolvable | typing.List[DialogflowCompanionAgentToolsetTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]

---

##### `companion_agent_id`<sup>Required</sup> <a name="companion_agent_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentId"></a>

```python
companion_agent_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCompanionAgentCesToolSpecs <a name="DialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs(
  ces_tool: str = None,
  confirmation_requirement: str = None,
  parameter_overrides: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecsParameterOverrides] = None,
  proactive_enabled: bool | IResolvable = None,
  reactive_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.cesTool">ces_tool</a></code> | <code>str</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">parameter_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `ces_tool`<sup>Optional</sup> <a name="ces_tool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```python
ces_tool: str
```

- *Type:* str

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool DialogflowCompanionAgent#ces_tool}

---

##### `confirmation_requirement`<sup>Optional</sup> <a name="confirmation_requirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}

---

##### `parameter_overrides`<sup>Optional</sup> <a name="parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```python
parameter_overrides: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}

---

##### `proactive_enabled`<sup>Optional</sup> <a name="proactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}

---

##### `reactive_enabled`<sup>Optional</sup> <a name="reactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}

---

### DialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="DialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides(
  context_reference_key: str,
  parameter_name: str,
  field_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">parameter_name</a></code> | <code>str</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">field_path</a></code> | <code>str</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}

---

### DialogflowCompanionAgentConfig <a name="DialogflowCompanionAgentConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  companion_agent_id: str,
  location: str,
  ces_tool_specs: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecs] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  skill_configs: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigs] = None,
  timeouts: DialogflowCompanionAgentTimeouts = None,
  toolset_tools: IResolvable | typing.List[DialogflowCompanionAgentToolsetTools] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.companionAgentId">companion_agent_id</a></code> | <code>str</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.location">location</a></code> | <code>str</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.cesToolSpecs">ces_tool_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.description">description</a></code> | <code>str</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.skillConfigs">skill_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.toolsetTools">toolset_tools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]</code> | toolset_tools block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `companion_agent_id`<sup>Required</sup> <a name="companion_agent_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.companionAgentId"></a>

```python
companion_agent_id: str
```

- *Type:* str

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#companion_agent_id DialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#location DialogflowCompanionAgent#location}

---

##### `ces_tool_specs`<sup>Optional</sup> <a name="ces_tool_specs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```python
ces_tool_specs: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool_specs DialogflowCompanionAgent#ces_tool_specs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#deletion_policy DialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}.

---

##### `skill_configs`<sup>Optional</sup> <a name="skill_configs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.skillConfigs"></a>

```python
skill_configs: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_configs DialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.timeouts"></a>

```python
timeouts: DialogflowCompanionAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#timeouts DialogflowCompanionAgent#timeouts}

---

##### `toolset_tools`<sup>Optional</sup> <a name="toolset_tools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.toolsetTools"></a>

```python
toolset_tools: IResolvable | typing.List[DialogflowCompanionAgentToolsetTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset_tools DialogflowCompanionAgent#toolset_tools}

---

### DialogflowCompanionAgentSkillConfigs <a name="DialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs(
  guidance_skill_config: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig = None,
  skill_triggering_event: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">guidance_skill_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">skill_triggering_event</a></code> | <code>str</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `guidance_skill_config`<sup>Optional</sup> <a name="guidance_skill_config" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```python
guidance_skill_config: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_skill_config DialogflowCompanionAgent#guidance_skill_config}

---

##### `skill_triggering_event`<sup>Optional</sup> <a name="skill_triggering_event" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```python
skill_triggering_event: str
```

- *Type:* str

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_triggering_event DialogflowCompanionAgent#skill_triggering_event}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig(
  guidance_instructions: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions] = None,
  overarching_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">guidance_instructions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]</code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">overarching_guidance</a></code> | <code>str</code> | This is specific additional guidance that can be configured by the user. |

---

##### `guidance_instructions`<sup>Optional</sup> <a name="guidance_instructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```python
guidance_instructions: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_instructions DialogflowCompanionAgent#guidance_instructions}

---

##### `overarching_guidance`<sup>Optional</sup> <a name="overarching_guidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```python
overarching_guidance: str
```

- *Type:* str

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#overarching_guidance DialogflowCompanionAgent#overarching_guidance}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions(
  actions: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions] = None,
  condition: str = None,
  disable_suggested_reply: bool | IResolvable = None,
  display_details: str = None,
  display_name: str = None,
  trigger_event: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">condition</a></code> | <code>str</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">disable_suggested_reply</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">display_details</a></code> | <code>str</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">display_name</a></code> | <code>str</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">trigger_event</a></code> | <code>str</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```python
actions: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#actions DialogflowCompanionAgent#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#condition DialogflowCompanionAgent#condition}

---

##### `disable_suggested_reply`<sup>Optional</sup> <a name="disable_suggested_reply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```python
disable_suggested_reply: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#disable_suggested_reply DialogflowCompanionAgent#disable_suggested_reply}

---

##### `display_details`<sup>Optional</sup> <a name="display_details" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```python
display_details: str
```

- *Type:* str

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_details DialogflowCompanionAgent#display_details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `trigger_event`<sup>Optional</sup> <a name="trigger_event" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```python
trigger_event: str
```

- *Type:* str

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#trigger_event DialogflowCompanionAgent#trigger_event}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions(
  description: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">description</a></code> | <code>str</code> | Description of action item. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

### DialogflowCompanionAgentTimeouts <a name="DialogflowCompanionAgentTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}.

---

### DialogflowCompanionAgentToolsetTools <a name="DialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools(
  toolset: str,
  confirmation_requirement: str = None,
  operation_id: str = None,
  parameter_overrides: IResolvable | typing.List[DialogflowCompanionAgentToolsetToolsParameterOverrides] = None,
  proactive_enabled: bool | IResolvable = None,
  reactive_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.toolset">toolset</a></code> | <code>str</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.operationId">operation_id</a></code> | <code>str</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.parameterOverrides">parameter_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset DialogflowCompanionAgent#toolset}

---

##### `confirmation_requirement`<sup>Optional</sup> <a name="confirmation_requirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}

---

##### `operation_id`<sup>Optional</sup> <a name="operation_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.operationId"></a>

```python
operation_id: str
```

- *Type:* str

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#operation_id DialogflowCompanionAgent#operation_id}

---

##### `parameter_overrides`<sup>Optional</sup> <a name="parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```python
parameter_overrides: IResolvable | typing.List[DialogflowCompanionAgentToolsetToolsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}

---

##### `proactive_enabled`<sup>Optional</sup> <a name="proactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}

---

##### `reactive_enabled`<sup>Optional</sup> <a name="reactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}

---

### DialogflowCompanionAgentToolsetToolsParameterOverrides <a name="DialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides(
  context_reference_key: str,
  parameter_name: str,
  field_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">parameter_name</a></code> | <code>str</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">field_path</a></code> | <code>str</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCompanionAgentCesToolSpecsList <a name="DialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentCesToolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>]

---


### DialogflowCompanionAgentCesToolSpecsOutputReference <a name="DialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">put_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">reset_ces_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">reset_confirmation_requirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">reset_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">reset_proactive_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">reset_reactive_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_overrides` <a name="put_parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```python
def put_parameter_overrides(
  value: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecsParameterOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

---

##### `reset_ces_tool` <a name="reset_ces_tool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```python
def reset_ces_tool() -> None
```

##### `reset_confirmation_requirement` <a name="reset_confirmation_requirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```python
def reset_confirmation_requirement() -> None
```

##### `reset_parameter_overrides` <a name="reset_parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```python
def reset_parameter_overrides() -> None
```

##### `reset_proactive_enabled` <a name="reset_proactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```python
def reset_proactive_enabled() -> None
```

##### `reset_reactive_enabled` <a name="reset_reactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```python
def reset_reactive_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList">DialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">ces_tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">confirmation_requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">parameter_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">proactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">reactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">ces_tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: DialogflowCompanionAgentCesToolSpecsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList">DialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `ces_tool_input`<sup>Optional</sup> <a name="ces_tool_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```python
ces_tool_input: str
```

- *Type:* str

---

##### `confirmation_requirement_input`<sup>Optional</sup> <a name="confirmation_requirement_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```python
confirmation_requirement_input: str
```

- *Type:* str

---

##### `parameter_overrides_input`<sup>Optional</sup> <a name="parameter_overrides_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```python
parameter_overrides_input: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

---

##### `proactive_enabled_input`<sup>Optional</sup> <a name="proactive_enabled_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```python
proactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled_input`<sup>Optional</sup> <a name="reactive_enabled_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```python
reactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ces_tool`<sup>Required</sup> <a name="ces_tool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```python
ces_tool: str
```

- *Type:* str

---

##### `confirmation_requirement`<sup>Required</sup> <a name="confirmation_requirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

---

##### `proactive_enabled`<sup>Required</sup> <a name="proactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled`<sup>Required</sup> <a name="reactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentCesToolSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>

---


### DialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="DialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentCesToolSpecsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

---


### DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">context_reference_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_reference_key_input`<sup>Optional</sup> <a name="context_reference_key_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```python
context_reference_key_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentCesToolSpecsParameterOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">reset_disable_suggested_reply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">reset_display_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">reset_trigger_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_disable_suggested_reply` <a name="reset_disable_suggested_reply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```python
def reset_disable_suggested_reply() -> None
```

##### `reset_display_details` <a name="reset_display_details" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```python
def reset_display_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_trigger_event` <a name="reset_trigger_event" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```python
def reset_trigger_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">disable_suggested_reply_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">display_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">trigger_event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">disable_suggested_reply</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">display_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">trigger_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```python
actions: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `disable_suggested_reply_input`<sup>Optional</sup> <a name="disable_suggested_reply_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```python
disable_suggested_reply_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_details_input`<sup>Optional</sup> <a name="display_details_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```python
display_details_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `trigger_event_input`<sup>Optional</sup> <a name="trigger_event_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```python
trigger_event_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `disable_suggested_reply`<sup>Required</sup> <a name="disable_suggested_reply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```python
disable_suggested_reply: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_details`<sup>Required</sup> <a name="display_details" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```python
display_details: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `trigger_event`<sup>Required</sup> <a name="trigger_event" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```python
trigger_event: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">put_guidance_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">reset_guidance_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">reset_overarching_guidance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_guidance_instructions` <a name="put_guidance_instructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```python
def put_guidance_instructions(
  value: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

---

##### `reset_guidance_instructions` <a name="reset_guidance_instructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```python
def reset_guidance_instructions() -> None
```

##### `reset_overarching_guidance` <a name="reset_overarching_guidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```python
def reset_overarching_guidance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">guidance_instructions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">guidance_instructions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">overarching_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">overarching_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guidance_instructions`<sup>Required</sup> <a name="guidance_instructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```python
guidance_instructions: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `guidance_instructions_input`<sup>Optional</sup> <a name="guidance_instructions_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```python
guidance_instructions_input: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

---

##### `overarching_guidance_input`<sup>Optional</sup> <a name="overarching_guidance_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```python
overarching_guidance_input: str
```

- *Type:* str

---

##### `overarching_guidance`<sup>Required</sup> <a name="overarching_guidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```python
overarching_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### DialogflowCompanionAgentSkillConfigsList <a name="DialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentSkillConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>]

---


### DialogflowCompanionAgentSkillConfigsOutputReference <a name="DialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">put_guidance_skill_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">reset_guidance_skill_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">reset_skill_triggering_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_guidance_skill_config` <a name="put_guidance_skill_config" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```python
def put_guidance_skill_config(
  guidance_instructions: IResolvable | typing.List[DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions] = None,
  overarching_guidance: str = None
) -> None
```

###### `guidance_instructions`<sup>Optional</sup> <a name="guidance_instructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.guidanceInstructions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_instructions DialogflowCompanionAgent#guidance_instructions}

---

###### `overarching_guidance`<sup>Optional</sup> <a name="overarching_guidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.overarchingGuidance"></a>

- *Type:* str

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#overarching_guidance DialogflowCompanionAgent#overarching_guidance}

---

##### `reset_guidance_skill_config` <a name="reset_guidance_skill_config" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```python
def reset_guidance_skill_config() -> None
```

##### `reset_skill_triggering_event` <a name="reset_skill_triggering_event" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```python
def reset_skill_triggering_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">guidance_skill_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">guidance_skill_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">skill_triggering_event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">skill_triggering_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guidance_skill_config`<sup>Required</sup> <a name="guidance_skill_config" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```python
guidance_skill_config: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `guidance_skill_config_input`<sup>Optional</sup> <a name="guidance_skill_config_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```python
guidance_skill_config_input: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `skill_triggering_event_input`<sup>Optional</sup> <a name="skill_triggering_event_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```python
skill_triggering_event_input: str
```

- *Type:* str

---

##### `skill_triggering_event`<sup>Required</sup> <a name="skill_triggering_event" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```python
skill_triggering_event: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentSkillConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>

---


### DialogflowCompanionAgentTimeoutsOutputReference <a name="DialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

---


### DialogflowCompanionAgentToolsetToolsList <a name="DialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentToolsetToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentToolsetTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>]

---


### DialogflowCompanionAgentToolsetToolsOutputReference <a name="DialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">put_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">reset_confirmation_requirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">reset_operation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">reset_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">reset_proactive_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">reset_reactive_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_overrides` <a name="put_parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```python
def put_parameter_overrides(
  value: IResolvable | typing.List[DialogflowCompanionAgentToolsetToolsParameterOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

---

##### `reset_confirmation_requirement` <a name="reset_confirmation_requirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```python
def reset_confirmation_requirement() -> None
```

##### `reset_operation_id` <a name="reset_operation_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```python
def reset_operation_id() -> None
```

##### `reset_parameter_overrides` <a name="reset_parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```python
def reset_parameter_overrides() -> None
```

##### `reset_proactive_enabled` <a name="reset_proactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```python
def reset_proactive_enabled() -> None
```

##### `reset_reactive_enabled` <a name="reset_reactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```python
def reset_reactive_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList">DialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">confirmation_requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">operation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">parameter_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">proactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">reactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">operation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: DialogflowCompanionAgentToolsetToolsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList">DialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `confirmation_requirement_input`<sup>Optional</sup> <a name="confirmation_requirement_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```python
confirmation_requirement_input: str
```

- *Type:* str

---

##### `operation_id_input`<sup>Optional</sup> <a name="operation_id_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```python
operation_id_input: str
```

- *Type:* str

---

##### `parameter_overrides_input`<sup>Optional</sup> <a name="parameter_overrides_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```python
parameter_overrides_input: IResolvable | typing.List[DialogflowCompanionAgentToolsetToolsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

---

##### `proactive_enabled_input`<sup>Optional</sup> <a name="proactive_enabled_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```python
proactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled_input`<sup>Optional</sup> <a name="reactive_enabled_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```python
reactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `confirmation_requirement`<sup>Required</sup> <a name="confirmation_requirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

---

##### `operation_id`<sup>Required</sup> <a name="operation_id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```python
operation_id: str
```

- *Type:* str

---

##### `proactive_enabled`<sup>Required</sup> <a name="proactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled`<sup>Required</sup> <a name="reactive_enabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentToolsetTools
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>

---


### DialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="DialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCompanionAgentToolsetToolsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

---


### DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_companion_agent

dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">context_reference_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_reference_key_input`<sup>Optional</sup> <a name="context_reference_key_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```python
context_reference_key_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCompanionAgentToolsetToolsParameterOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>

---




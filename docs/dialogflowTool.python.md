# `dialogflowTool` Submodule <a name="`dialogflowTool` Submodule" id="@cdktn/provider-google.dialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowTool <a name="DialogflowTool" id="@cdktn/provider-google.dialogflowTool.DialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowTool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  tool_key: str,
  action_confirmation_requirement: typing.Mapping[str] = None,
  connector_spec: DialogflowToolConnectorSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  function_spec: DialogflowToolFunctionSpec = None,
  id: str = None,
  open_api_spec: DialogflowToolOpenApiSpec = None,
  project: str = None,
  timeouts: DialogflowToolTimeouts = None,
  tool_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolKey">tool_key</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.actionConfirmationRequirement">action_confirmation_requirement</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolId">tool_id</a></code> | <code>str</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.location"></a>

- *Type:* str

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `tool_key`<sup>Required</sup> <a name="tool_key" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolKey"></a>

- *Type:* str

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `action_confirmation_requirement`<sup>Optional</sup> <a name="action_confirmation_requirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.actionConfirmationRequirement"></a>

- *Type:* typing.Mapping[str]

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `connector_spec`<sup>Optional</sup> <a name="connector_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connectorSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.description"></a>

- *Type:* str

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.functionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.openApiSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolId"></a>

- *Type:* str

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec">put_connector_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec">put_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec">put_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement">reset_action_confirmation_requirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec">reset_connector_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec">reset_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec">reset_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId">reset_tool_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connector_spec` <a name="put_connector_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec"></a>

```python
def put_connector_spec(
  actions: IResolvable | typing.List[DialogflowToolConnectorSpecActions],
  name: str
) -> None
```

###### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#actions DialogflowTool#actions}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec.parameter.name"></a>

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#name DialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_function_spec` <a name="put_function_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec"></a>

```python
def put_function_spec(
  input_schema: str = None,
  method_type: str = None,
  output_schema: str = None
) -> None
```

###### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.inputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_schema DialogflowTool#input_schema}

---

###### `method_type`<sup>Optional</sup> <a name="method_type" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.methodType"></a>

- *Type:* str

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#method_type DialogflowTool#method_type}

---

###### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.outputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_schema DialogflowTool#output_schema}

---

##### `put_open_api_spec` <a name="put_open_api_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec"></a>

```python
def put_open_api_spec(
  text_schema: str,
  authentication: DialogflowToolOpenApiSpecAuthentication = None,
  service_directory_config: DialogflowToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: DialogflowToolOpenApiSpecTlsConfig = None
) -> None
```

###### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.textSchema"></a>

- *Type:* str

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#text_schema DialogflowTool#text_schema}

---

###### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#authentication DialogflowTool#authentication}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_directory_config DialogflowTool#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tls_config DialogflowTool#tls_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}.

---

##### `reset_action_confirmation_requirement` <a name="reset_action_confirmation_requirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement"></a>

```python
def reset_action_confirmation_requirement() -> None
```

##### `reset_connector_spec` <a name="reset_connector_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec"></a>

```python
def reset_connector_spec() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_function_spec` <a name="reset_function_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec"></a>

```python
def reset_function_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_open_api_spec` <a name="reset_open_api_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec"></a>

```python
def reset_open_api_spec() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tool_id` <a name="reset_tool_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId"></a>

```python
def reset_tool_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowTool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowTool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowTool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowTool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowTool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi">satisfies_pzi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs">satisfies_pzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput">action_confirmation_requirement_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput">connector_spec_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput">function_spec_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput">open_api_spec_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput">tool_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement">action_confirmation_requirement</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey">tool_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_spec`<sup>Required</sup> <a name="connector_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec"></a>

```python
connector_spec: DialogflowToolConnectorSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `function_spec`<sup>Required</sup> <a name="function_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec"></a>

```python
function_spec: DialogflowToolFunctionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_spec`<sup>Required</sup> <a name="open_api_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec"></a>

```python
open_api_spec: DialogflowToolOpenApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a>

---

##### `satisfies_pzi`<sup>Required</sup> <a name="satisfies_pzi" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi"></a>

```python
satisfies_pzi: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `satisfies_pzs`<sup>Required</sup> <a name="satisfies_pzs" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs"></a>

```python
satisfies_pzs: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts"></a>

```python
timeouts: DialogflowToolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_confirmation_requirement_input`<sup>Optional</sup> <a name="action_confirmation_requirement_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput"></a>

```python
action_confirmation_requirement_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connector_spec_input`<sup>Optional</sup> <a name="connector_spec_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput"></a>

```python
connector_spec_input: DialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `function_spec_input`<sup>Optional</sup> <a name="function_spec_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput"></a>

```python
function_spec_input: DialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `open_api_spec_input`<sup>Optional</sup> <a name="open_api_spec_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput"></a>

```python
open_api_spec_input: DialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DialogflowToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `tool_key_input`<sup>Optional</sup> <a name="tool_key_input" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput"></a>

```python
tool_key_input: str
```

- *Type:* str

---

##### `action_confirmation_requirement`<sup>Required</sup> <a name="action_confirmation_requirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement"></a>

```python
action_confirmation_requirement: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `tool_key`<sup>Required</sup> <a name="tool_key" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey"></a>

```python
tool_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowToolConfig <a name="DialogflowToolConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  tool_key: str,
  action_confirmation_requirement: typing.Mapping[str] = None,
  connector_spec: DialogflowToolConnectorSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  function_spec: DialogflowToolFunctionSpec = None,
  id: str = None,
  open_api_spec: DialogflowToolOpenApiSpec = None,
  project: str = None,
  timeouts: DialogflowToolTimeouts = None,
  tool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location">location</a></code> | <code>str</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey">tool_key</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement">action_confirmation_requirement</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description">description</a></code> | <code>str</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId">tool_id</a></code> | <code>str</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `tool_key`<sup>Required</sup> <a name="tool_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey"></a>

```python
tool_key: str
```

- *Type:* str

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `action_confirmation_requirement`<sup>Optional</sup> <a name="action_confirmation_requirement" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement"></a>

```python
action_confirmation_requirement: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `connector_spec`<sup>Optional</sup> <a name="connector_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec"></a>

```python
connector_spec: DialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec"></a>

```python
function_spec: DialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec"></a>

```python
open_api_spec: DialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts"></a>

```python
timeouts: DialogflowToolTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

### DialogflowToolConnectorSpec <a name="DialogflowToolConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpec(
  actions: IResolvable | typing.List[DialogflowToolConnectorSpecActions],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name">name</a></code> | <code>str</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions"></a>

```python
actions: IResolvable | typing.List[DialogflowToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#actions DialogflowTool#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name"></a>

```python
name: str
```

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#name DialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DialogflowToolConnectorSpecActions <a name="DialogflowToolConnectorSpecActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpecActions(
  connection_action_id: str = None,
  entity_operation: DialogflowToolConnectorSpecActionsEntityOperation = None,
  input_fields: typing.List[str] = None,
  output_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connection_action_id`<sup>Optional</sup> <a name="connection_action_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connection_action_id DialogflowTool#connection_action_id}

---

##### `entity_operation`<sup>Optional</sup> <a name="entity_operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation"></a>

```python
entity_operation: DialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_operation DialogflowTool#entity_operation}

---

##### `input_fields`<sup>Optional</sup> <a name="input_fields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_fields DialogflowTool#input_fields}

---

##### `output_fields`<sup>Optional</sup> <a name="output_fields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_fields DialogflowTool#output_fields}

---

### DialogflowToolConnectorSpecActionsEntityOperation <a name="DialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation(
  entity_id: str,
  operation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>str</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_id DialogflowTool#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#operation DialogflowTool#operation}

---

### DialogflowToolFunctionSpec <a name="DialogflowToolFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolFunctionSpec(
  input_schema: str = None,
  method_type: str = None,
  output_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema">input_schema</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType">method_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema">output_schema</a></code> | <code>str</code> | Optional. |

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_schema DialogflowTool#input_schema}

---

##### `method_type`<sup>Optional</sup> <a name="method_type" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType"></a>

```python
method_type: str
```

- *Type:* str

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#method_type DialogflowTool#method_type}

---

##### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_schema DialogflowTool#output_schema}

---

### DialogflowToolOpenApiSpec <a name="DialogflowToolOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpec(
  text_schema: str,
  authentication: DialogflowToolOpenApiSpecAuthentication = None,
  service_directory_config: DialogflowToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: DialogflowToolOpenApiSpecTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema">text_schema</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#text_schema DialogflowTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication"></a>

```python
authentication: DialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#authentication DialogflowTool#authentication}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_directory_config DialogflowTool#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig"></a>

```python
tls_config: DialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tls_config DialogflowTool#tls_config}

---

### DialogflowToolOpenApiSpecAuthentication <a name="DialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthentication(
  api_key_config: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: DialogflowToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key_config DialogflowTool#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#bearer_token_config DialogflowTool#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```python
oauth_config: DialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_config DialogflowTool#oauth_config}

---

##### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth_config DialogflowTool#service_agent_auth_config}

---

### DialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">api_key</a></code> | <code>str</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | Optional. |

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#key_name DialogflowTool#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#request_location DialogflowTool#request_location}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key DialogflowTool#api_key}

---

##### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_api_key DialogflowTool#secret_version_for_api_key}

---

### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig(
  secret_version_for_token: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_token DialogflowTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token DialogflowTool#token}

---

### DialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig(
  client_id: str,
  oauth_grant_type: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | Optional. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_id DialogflowTool#client_id}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_grant_type DialogflowTool#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token_endpoint DialogflowTool#token_endpoint}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_secret DialogflowTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#scopes DialogflowTool#scopes}

---

##### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_client_secret DialogflowTool#secret_version_for_client_secret}

---

### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig(
  service_agent_auth: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | Optional. |

---

##### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth DialogflowTool#service_agent_auth}

---

### DialogflowToolOpenApiSpecServiceDirectoryConfig <a name="DialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service DialogflowTool#service}

---

### DialogflowToolOpenApiSpecTlsConfig <a name="DialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecTlsConfig(
  ca_certs: IResolvable | typing.List[DialogflowToolOpenApiSpecTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[DialogflowToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#ca_certs DialogflowTool#ca_certs}

---

### DialogflowToolOpenApiSpecTlsConfigCaCerts <a name="DialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#cert DialogflowTool#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

### DialogflowToolTimeouts <a name="DialogflowToolTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="DialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---


### DialogflowToolConnectorSpecActionsList <a name="DialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpecActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]

---


### DialogflowToolConnectorSpecActionsOutputReference <a name="DialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">put_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">reset_connection_action_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">reset_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields">reset_input_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">reset_output_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_operation` <a name="put_entity_operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```python
def put_entity_operation(
  entity_id: str,
  operation: str
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.entityId"></a>

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_id DialogflowTool#entity_id}

---

###### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.operation"></a>

- *Type:* str

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#operation DialogflowTool#operation}

---

##### `reset_connection_action_id` <a name="reset_connection_action_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```python
def reset_connection_action_id() -> None
```

##### `reset_entity_operation` <a name="reset_entity_operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```python
def reset_entity_operation() -> None
```

##### `reset_input_fields` <a name="reset_input_fields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```python
def reset_input_fields() -> None
```

##### `reset_output_fields` <a name="reset_output_fields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```python
def reset_output_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connection_action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">entity_operation_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">input_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">output_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_operation`<sup>Required</sup> <a name="entity_operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```python
entity_operation: DialogflowToolConnectorSpecActionsEntityOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connection_action_id_input`<sup>Optional</sup> <a name="connection_action_id_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```python
connection_action_id_input: str
```

- *Type:* str

---

##### `entity_operation_input`<sup>Optional</sup> <a name="entity_operation_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```python
entity_operation_input: DialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `input_fields_input`<sup>Optional</sup> <a name="input_fields_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```python
input_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields_input`<sup>Optional</sup> <a name="output_fields_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```python
output_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_action_id`<sup>Required</sup> <a name="connection_action_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

---

##### `input_fields`<sup>Required</sup> <a name="input_fields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields`<sup>Required</sup> <a name="output_fields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowToolConnectorSpecActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>

---


### DialogflowToolConnectorSpecOutputReference <a name="DialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolConnectorSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions">put_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[DialogflowToolConnectorSpecActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions"></a>

```python
actions: DialogflowToolConnectorSpecActionsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[DialogflowToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---


### DialogflowToolFunctionSpecOutputReference <a name="DialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolFunctionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType">reset_method_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema">reset_output_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_schema` <a name="reset_input_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_method_type` <a name="reset_method_type" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```python
def reset_method_type() -> None
```

##### `reset_output_schema` <a name="reset_output_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```python
def reset_output_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">input_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput">method_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">output_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType">method_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema">output_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```python
input_schema_input: str
```

- *Type:* str

---

##### `method_type_input`<sup>Optional</sup> <a name="method_type_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```python
method_type_input: str
```

- *Type:* str

---

##### `output_schema_input`<sup>Optional</sup> <a name="output_schema_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```python
output_schema_input: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `method_type`<sup>Required</sup> <a name="method_type" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```python
method_type: str
```

- *Type:* str

---

##### `output_schema`<sup>Required</sup> <a name="output_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---


### DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">reset_secret_version_for_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_secret_version_for_api_key` <a name="reset_secret_version_for_api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```python
def reset_secret_version_for_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secret_version_for_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `secret_version_for_api_key_input`<sup>Optional</sup> <a name="secret_version_for_api_key_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```python
secret_version_for_api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `secret_version_for_api_key`<sup>Required</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">reset_secret_version_for_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_version_for_token` <a name="reset_secret_version_for_token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```python
def reset_secret_version_for_token() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secret_version_for_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_for_token_input`<sup>Optional</sup> <a name="secret_version_for_token_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```python
secret_version_for_token_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `secret_version_for_token`<sup>Required</sup> <a name="secret_version_for_token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">reset_secret_version_for_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_version_for_client_secret` <a name="reset_secret_version_for_client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```python
def reset_secret_version_for_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secret_version_for_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret_input`<sup>Optional</sup> <a name="secret_version_for_client_secret_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```python
secret_version_for_client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret`<sup>Required</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">put_service_agent_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">reset_service_agent_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
) -> None
```

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#key_name DialogflowTool#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#request_location DialogflowTool#request_location}

---

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.apiKey"></a>

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key DialogflowTool#api_key}

---

###### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.secretVersionForApiKey"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_api_key DialogflowTool#secret_version_for_api_key}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  secret_version_for_token: str = None,
  token: str = None
) -> None
```

###### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.secretVersionForToken"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_token DialogflowTool#secret_version_for_token}

---

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token DialogflowTool#token}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  oauth_grant_type: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_id DialogflowTool#client_id}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_grant_type DialogflowTool#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token_endpoint DialogflowTool#token_endpoint}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_secret DialogflowTool#client_secret}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#scopes DialogflowTool#scopes}

---

###### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.secretVersionForClientSecret"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_client_secret DialogflowTool#secret_version_for_client_secret}

---

##### `put_service_agent_auth_config` <a name="put_service_agent_auth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```python
def put_service_agent_auth_config(
  service_agent_auth: str = None
) -> None
```

###### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.serviceAgentAuth"></a>

- *Type:* str

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth DialogflowTool#service_agent_auth}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_agent_auth_config` <a name="reset_service_agent_auth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```python
def reset_service_agent_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">service_agent_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `service_agent_auth_config`<sup>Required</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: DialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `service_agent_auth_config_input`<sup>Optional</sup> <a name="service_agent_auth_config_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```python
service_agent_auth_config_input: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---


### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">reset_service_agent_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_agent_auth` <a name="reset_service_agent_auth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```python
def reset_service_agent_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">service_agent_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_agent_auth_input`<sup>Optional</sup> <a name="service_agent_auth_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```python
service_agent_auth_input: str
```

- *Type:* str

---

##### `service_agent_auth`<sup>Required</sup> <a name="service_agent_auth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### DialogflowToolOpenApiSpecOutputReference <a name="DialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```python
def put_authentication(
  api_key_config: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: DialogflowToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key_config DialogflowTool#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#bearer_token_config DialogflowTool#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_config DialogflowTool#oauth_config}

---

###### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.serviceAgentAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth_config DialogflowTool#service_agent_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service DialogflowTool#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[DialogflowToolOpenApiSpecTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#ca_certs DialogflowTool#ca_certs}

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">text_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema">text_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```python
authentication: DialogflowToolOpenApiSpecAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```python
tls_config: DialogflowToolOpenApiSpecTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```python
authentication_input: DialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: DialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `text_schema_input`<sup>Optional</sup> <a name="text_schema_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```python
text_schema_input: str
```

- *Type:* str

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: DialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---


### DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowToolOpenApiSpecTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>

---


### DialogflowToolOpenApiSpecTlsConfigOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[DialogflowToolOpenApiSpecTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: DialogflowToolOpenApiSpecTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[DialogflowToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---


### DialogflowToolTimeoutsOutputReference <a name="DialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_tool

dialogflowTool.DialogflowToolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---




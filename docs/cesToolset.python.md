# `cesToolset` Submodule <a name="`cesToolset` Submodule" id="@cdktn/provider-google.cesToolset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesToolset <a name="CesToolset" id="@cdktn/provider-google.cesToolset.CesToolset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset google_ces_toolset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolset(
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
  location: str,
  toolset_id: str,
  connector_toolset: CesToolsetConnectorToolset = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  execution_type: str = None,
  id: str = None,
  mcp_toolset: CesToolsetMcpToolset = None,
  open_api_toolset: CesToolsetOpenApiToolset = None,
  project: str = None,
  timeout: str = None,
  timeouts: CesToolsetTimeouts = None,
  tool_fake_config: CesToolsetToolFakeConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.toolsetId">toolset_id</a></code> | <code>str</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.connectorToolset">connector_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a></code> | connector_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#id CesToolset#id}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.mcpToolset">mcp_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.openApiToolset">open_api_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#project CesToolset#project}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.timeout">timeout</a></code> | <code>str</code> | The timeout for the toolset execution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.toolFakeConfig">tool_fake_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a></code> | tool_fake_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#app CesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#location CesToolset#location}

---

##### `toolset_id`<sup>Required</sup> <a name="toolset_id" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.toolsetId"></a>

- *Type:* str

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#toolset_id CesToolset#toolset_id}

---

##### `connector_toolset`<sup>Optional</sup> <a name="connector_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.connectorToolset"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a>

connector_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connector_toolset CesToolset#connector_toolset}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#deletion_policy CesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.description"></a>

- *Type:* str

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#description CesToolset#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.executionType"></a>

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#execution_type CesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#id CesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcp_toolset`<sup>Optional</sup> <a name="mcp_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.mcpToolset"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#mcp_toolset CesToolset#mcp_toolset}

---

##### `open_api_toolset`<sup>Optional</sup> <a name="open_api_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.openApiToolset"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#open_api_toolset CesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#project CesToolset#project}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.timeout"></a>

- *Type:* str

The timeout for the toolset execution.

If not set, the default timeout is
30 seconds for 'SYNCHRONOUS' toolsets and 60 seconds for 'ASYNCHRONOUS'
toolsets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#timeout CesToolset#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#timeouts CesToolset#timeouts}

---

##### `tool_fake_config`<sup>Optional</sup> <a name="tool_fake_config" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.toolFakeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a>

tool_fake_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#tool_fake_config CesToolset#tool_fake_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putConnectorToolset">put_connector_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset">put_mcp_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset">put_open_api_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putToolFakeConfig">put_tool_fake_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetConnectorToolset">reset_connector_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetExecutionType">reset_execution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetMcpToolset">reset_mcp_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetOpenApiToolset">reset_open_api_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetToolFakeConfig">reset_tool_fake_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesToolset.CesToolset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesToolset.CesToolset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesToolset.CesToolset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesToolset.CesToolset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesToolset.CesToolset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesToolset.CesToolset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesToolset.CesToolset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesToolset.CesToolset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesToolset.CesToolset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesToolset.CesToolset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesToolset.CesToolset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesToolset.CesToolset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesToolset.CesToolset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesToolset.CesToolset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesToolset.CesToolset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesToolset.CesToolset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesToolset.CesToolset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesToolset.CesToolset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connector_toolset` <a name="put_connector_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.putConnectorToolset"></a>

```python
def put_connector_toolset(
  connection: str,
  connector_actions: IResolvable | typing.List[CesToolsetConnectorToolsetConnectorActions],
  auth_config: CesToolsetConnectorToolsetAuthConfig = None
) -> None
```

###### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolset.putConnectorToolset.parameter.connection"></a>

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/{project}/locations/{location}/connections/{connection}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connection CesToolset#connection}

---

###### `connector_actions`<sup>Required</sup> <a name="connector_actions" id="@cdktn/provider-google.cesToolset.CesToolset.putConnectorToolset.parameter.connectorActions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]

connector_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connector_actions CesToolset#connector_actions}

---

###### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktn/provider-google.cesToolset.CesToolset.putConnectorToolset.parameter.authConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#auth_config CesToolset#auth_config}

---

##### `put_mcp_toolset` <a name="put_mcp_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset"></a>

```python
def put_mcp_toolset(
  server_address: str,
  api_authentication: CesToolsetMcpToolsetApiAuthentication = None,
  custom_headers: typing.Mapping[str] = None,
  service_directory_config: CesToolsetMcpToolsetServiceDirectoryConfig = None,
  tls_config: CesToolsetMcpToolsetTlsConfig = None
) -> None
```

###### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset.parameter.serverAddress"></a>

- *Type:* str

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#server_address CesToolset#server_address}

---

###### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset.parameter.apiAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}

---

###### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset.parameter.customHeaders"></a>

- *Type:* typing.Mapping[str]

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#custom_headers CesToolset#custom_headers}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#tls_config CesToolset#tls_config}

---

##### `put_open_api_toolset` <a name="put_open_api_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset"></a>

```python
def put_open_api_toolset(
  open_api_schema: str,
  api_authentication: CesToolsetOpenApiToolsetApiAuthentication = None,
  ignore_unknown_fields: bool | IResolvable = None,
  service_directory_config: CesToolsetOpenApiToolsetServiceDirectoryConfig = None,
  tls_config: CesToolsetOpenApiToolsetTlsConfig = None
) -> None
```

###### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset.parameter.openApiSchema"></a>

- *Type:* str

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#open_api_schema CesToolset#open_api_schema}

---

###### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset.parameter.apiAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}

---

###### `ignore_unknown_fields`<sup>Optional</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset.parameter.ignoreUnknownFields"></a>

- *Type:* bool | cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#ignore_unknown_fields CesToolset#ignore_unknown_fields}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#tls_config CesToolset#tls_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesToolset.CesToolset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesToolset.CesToolset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#create CesToolset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesToolset.CesToolset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#delete CesToolset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesToolset.CesToolset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#update CesToolset#update}.

---

##### `put_tool_fake_config` <a name="put_tool_fake_config" id="@cdktn/provider-google.cesToolset.CesToolset.putToolFakeConfig"></a>

```python
def put_tool_fake_config(
  code_block: CesToolsetToolFakeConfigCodeBlock = None,
  enable_fake_mode: bool | IResolvable = None
) -> None
```

###### `code_block`<sup>Optional</sup> <a name="code_block" id="@cdktn/provider-google.cesToolset.CesToolset.putToolFakeConfig.parameter.codeBlock"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a>

code_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#code_block CesToolset#code_block}

---

###### `enable_fake_mode`<sup>Optional</sup> <a name="enable_fake_mode" id="@cdktn/provider-google.cesToolset.CesToolset.putToolFakeConfig.parameter.enableFakeMode"></a>

- *Type:* bool | cdktn.IResolvable

Whether the tool is using fake mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#enable_fake_mode CesToolset#enable_fake_mode}

---

##### `reset_connector_toolset` <a name="reset_connector_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.resetConnectorToolset"></a>

```python
def reset_connector_toolset() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cesToolset.CesToolset.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesToolset.CesToolset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.cesToolset.CesToolset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_execution_type` <a name="reset_execution_type" id="@cdktn/provider-google.cesToolset.CesToolset.resetExecutionType"></a>

```python
def reset_execution_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesToolset.CesToolset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mcp_toolset` <a name="reset_mcp_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.resetMcpToolset"></a>

```python
def reset_mcp_toolset() -> None
```

##### `reset_open_api_toolset` <a name="reset_open_api_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.resetOpenApiToolset"></a>

```python
def reset_open_api_toolset() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesToolset.CesToolset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-google.cesToolset.CesToolset.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesToolset.CesToolset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tool_fake_config` <a name="reset_tool_fake_config" id="@cdktn/provider-google.cesToolset.CesToolset.resetToolFakeConfig"></a>

```python
def reset_tool_fake_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesToolset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesToolset.CesToolset.isConstruct"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesToolset.CesToolset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesToolset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesToolset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesToolset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesToolset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.connectorToolset">connector_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference">CesToolsetConnectorToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolset">mcp_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference">CesToolsetMcpToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolset">open_api_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference">CesToolsetOpenApiToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference">CesToolsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.toolFakeConfig">tool_fake_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference">CesToolsetToolFakeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.connectorToolsetInput">connector_toolset_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.executionTypeInput">execution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolsetInput">mcp_toolset_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolsetInput">open_api_toolset_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.toolFakeConfigInput">tool_fake_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.toolsetIdInput">toolset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.executionType">execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.toolsetId">toolset_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesToolset.CesToolset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesToolset.CesToolset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesToolset.CesToolset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesToolset.CesToolset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesToolset.CesToolset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesToolset.CesToolset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesToolset.CesToolset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesToolset.CesToolset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesToolset.CesToolset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesToolset.CesToolset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesToolset.CesToolset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_toolset`<sup>Required</sup> <a name="connector_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.property.connectorToolset"></a>

```python
connector_toolset: CesToolsetConnectorToolsetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference">CesToolsetConnectorToolsetOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesToolset.CesToolset.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesToolset.CesToolset.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `mcp_toolset`<sup>Required</sup> <a name="mcp_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolset"></a>

```python
mcp_toolset: CesToolsetMcpToolsetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference">CesToolsetMcpToolsetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesToolset.CesToolset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_toolset`<sup>Required</sup> <a name="open_api_toolset" id="@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolset"></a>

```python
open_api_toolset: CesToolsetOpenApiToolsetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference">CesToolsetOpenApiToolsetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesToolset.CesToolset.property.timeouts"></a>

```python
timeouts: CesToolsetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference">CesToolsetTimeoutsOutputReference</a>

---

##### `tool_fake_config`<sup>Required</sup> <a name="tool_fake_config" id="@cdktn/provider-google.cesToolset.CesToolset.property.toolFakeConfig"></a>

```python
tool_fake_config: CesToolsetToolFakeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference">CesToolsetToolFakeConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesToolset.CesToolset.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `connector_toolset_input`<sup>Optional</sup> <a name="connector_toolset_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.connectorToolsetInput"></a>

```python
connector_toolset_input: CesToolsetConnectorToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_type_input`<sup>Optional</sup> <a name="execution_type_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.executionTypeInput"></a>

```python
execution_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_toolset_input`<sup>Optional</sup> <a name="mcp_toolset_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolsetInput"></a>

```python
mcp_toolset_input: CesToolsetMcpToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

---

##### `open_api_toolset_input`<sup>Optional</sup> <a name="open_api_toolset_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolsetInput"></a>

```python
open_api_toolset_input: CesToolsetOpenApiToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesToolsetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

---

##### `tool_fake_config_input`<sup>Optional</sup> <a name="tool_fake_config_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.toolFakeConfigInput"></a>

```python
tool_fake_config_input: CesToolsetToolFakeConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a>

---

##### `toolset_id_input`<sup>Optional</sup> <a name="toolset_id_input" id="@cdktn/provider-google.cesToolset.CesToolset.property.toolsetIdInput"></a>

```python
toolset_id_input: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesToolset.CesToolset.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesToolset.CesToolset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_type`<sup>Required</sup> <a name="execution_type" id="@cdktn/provider-google.cesToolset.CesToolset.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesToolset.CesToolset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesToolset.CesToolset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google.cesToolset.CesToolset.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `toolset_id`<sup>Required</sup> <a name="toolset_id" id="@cdktn/provider-google.cesToolset.CesToolset.property.toolsetId"></a>

```python
toolset_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesToolset.CesToolset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesToolsetConfig <a name="CesToolsetConfig" id="@cdktn/provider-google.cesToolset.CesToolsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  location: str,
  toolset_id: str,
  connector_toolset: CesToolsetConnectorToolset = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  execution_type: str = None,
  id: str = None,
  mcp_toolset: CesToolsetMcpToolset = None,
  open_api_toolset: CesToolsetOpenApiToolset = None,
  project: str = None,
  timeout: str = None,
  timeouts: CesToolsetTimeouts = None,
  tool_fake_config: CesToolsetToolFakeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.toolsetId">toolset_id</a></code> | <code>str</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.connectorToolset">connector_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a></code> | connector_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.description">description</a></code> | <code>str</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#id CesToolset#id}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.mcpToolset">mcp_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.openApiToolset">open_api_toolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#project CesToolset#project}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.timeout">timeout</a></code> | <code>str</code> | The timeout for the toolset execution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.toolFakeConfig">tool_fake_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a></code> | tool_fake_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#app CesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#location CesToolset#location}

---

##### `toolset_id`<sup>Required</sup> <a name="toolset_id" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.toolsetId"></a>

```python
toolset_id: str
```

- *Type:* str

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#toolset_id CesToolset#toolset_id}

---

##### `connector_toolset`<sup>Optional</sup> <a name="connector_toolset" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.connectorToolset"></a>

```python
connector_toolset: CesToolsetConnectorToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a>

connector_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connector_toolset CesToolset#connector_toolset}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#deletion_policy CesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#description CesToolset#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#execution_type CesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#id CesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcp_toolset`<sup>Optional</sup> <a name="mcp_toolset" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.mcpToolset"></a>

```python
mcp_toolset: CesToolsetMcpToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#mcp_toolset CesToolset#mcp_toolset}

---

##### `open_api_toolset`<sup>Optional</sup> <a name="open_api_toolset" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.openApiToolset"></a>

```python
open_api_toolset: CesToolsetOpenApiToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#open_api_toolset CesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#project CesToolset#project}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

The timeout for the toolset execution.

If not set, the default timeout is
30 seconds for 'SYNCHRONOUS' toolsets and 60 seconds for 'ASYNCHRONOUS'
toolsets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#timeout CesToolset#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.timeouts"></a>

```python
timeouts: CesToolsetTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#timeouts CesToolset#timeouts}

---

##### `tool_fake_config`<sup>Optional</sup> <a name="tool_fake_config" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.toolFakeConfig"></a>

```python
tool_fake_config: CesToolsetToolFakeConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a>

tool_fake_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#tool_fake_config CesToolset#tool_fake_config}

---

### CesToolsetConnectorToolset <a name="CesToolsetConnectorToolset" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolset(
  connection: str,
  connector_actions: IResolvable | typing.List[CesToolsetConnectorToolsetConnectorActions],
  auth_config: CesToolsetConnectorToolsetAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.property.connection">connection</a></code> | <code>str</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/{project}/locations/{location}/connections/{connection}'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.property.connectorActions">connector_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]</code> | connector_actions block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a></code> | auth_config block. |

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.property.connection"></a>

```python
connection: str
```

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/{project}/locations/{location}/connections/{connection}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connection CesToolset#connection}

---

##### `connector_actions`<sup>Required</sup> <a name="connector_actions" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.property.connectorActions"></a>

```python
connector_actions: IResolvable | typing.List[CesToolsetConnectorToolsetConnectorActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]

connector_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connector_actions CesToolset#connector_actions}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset.property.authConfig"></a>

```python
auth_config: CesToolsetConnectorToolsetAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#auth_config CesToolset#auth_config}

---

### CesToolsetConnectorToolsetAuthConfig <a name="CesToolsetConnectorToolsetAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetAuthConfig(
  oauth2_auth_code_config: CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig = None,
  oauth2_jwt_bearer_config: CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig.property.oauth2AuthCodeConfig">oauth2_auth_code_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a></code> | oauth2_auth_code_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig.property.oauth2JwtBearerConfig">oauth2_jwt_bearer_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a></code> | oauth2_jwt_bearer_config block. |

---

##### `oauth2_auth_code_config`<sup>Optional</sup> <a name="oauth2_auth_code_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig.property.oauth2AuthCodeConfig"></a>

```python
oauth2_auth_code_config: CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth2_auth_code_config CesToolset#oauth2_auth_code_config}

---

##### `oauth2_jwt_bearer_config`<sup>Optional</sup> <a name="oauth2_jwt_bearer_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig.property.oauth2JwtBearerConfig"></a>

```python
oauth2_jwt_bearer_config: CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth2_jwt_bearer_config CesToolset#oauth2_jwt_bearer_config}

---

### CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig <a name="CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig(
  oauth_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig.property.oauthToken">oauth_token</a></code> | <code>str</code> | Oauth token parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

Oauth token parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_token CesToolset#oauth_token}

---

### CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig <a name="CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig(
  client_key: str,
  issuer: str,
  subject: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.property.clientKey">client_key</a></code> | <code>str</code> | Client parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.property.issuer">issuer</a></code> | <code>str</code> | Issuer parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.property.subject">subject</a></code> | <code>str</code> | Subject parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

Client parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_key CesToolset#client_key}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Issuer parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#issuer CesToolset#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig.property.subject"></a>

```python
subject: str
```

- *Type:* str

Subject parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#subject CesToolset#subject}

---

### CesToolsetConnectorToolsetConnectorActions <a name="CesToolsetConnectorToolsetConnectorActions" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetConnectorActions(
  connection_action_id: str = None,
  entity_operation: CesToolsetConnectorToolsetConnectorActionsEntityOperation = None,
  input_fields: typing.List[str] = None,
  output_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation">CesToolsetConnectorToolsetConnectorActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | Entity fields to return from the operation. |

---

##### `connection_action_id`<sup>Optional</sup> <a name="connection_action_id" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

ID of a Connection action for the tool to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#connection_action_id CesToolset#connection_action_id}

---

##### `entity_operation`<sup>Optional</sup> <a name="entity_operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.entityOperation"></a>

```python
entity_operation: CesToolsetConnectorToolsetConnectorActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation">CesToolsetConnectorToolsetConnectorActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#entity_operation CesToolset#entity_operation}

---

##### `input_fields`<sup>Optional</sup> <a name="input_fields" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to use as inputs for the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#input_fields CesToolset#input_fields}

---

##### `output_fields`<sup>Optional</sup> <a name="output_fields" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to return from the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#output_fields CesToolset#output_fields}

---

### CesToolsetConnectorToolsetConnectorActionsEntityOperation <a name="CesToolsetConnectorToolsetConnectorActionsEntityOperation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation(
  entity_id: str,
  operation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation.property.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation.property.operation">operation</a></code> | <code>str</code> | Operation to perform on the entity. Possible values: LIST GET CREATE UPDATE DELETE. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#entity_id CesToolset#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation.property.operation"></a>

```python
operation: str
```

- *Type:* str

Operation to perform on the entity. Possible values: LIST GET CREATE UPDATE DELETE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#operation CesToolset#operation}

---

### CesToolsetMcpToolset <a name="CesToolsetMcpToolset" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolset(
  server_address: str,
  api_authentication: CesToolsetMcpToolsetApiAuthentication = None,
  custom_headers: typing.Mapping[str] = None,
  service_directory_config: CesToolsetMcpToolsetServiceDirectoryConfig = None,
  tls_config: CesToolsetMcpToolsetTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serverAddress">server_address</a></code> | <code>str</code> | The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.customHeaders">custom_headers</a></code> | <code>typing.Mapping[str]</code> | The custom headers to send in the request to the MCP server. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a></code> | tls_config block. |

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#server_address CesToolset#server_address}

---

##### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.apiAuthentication"></a>

```python
api_authentication: CesToolsetMcpToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.customHeaders"></a>

```python
custom_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#custom_headers CesToolset#custom_headers}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serviceDirectoryConfig"></a>

```python
service_directory_config: CesToolsetMcpToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.tlsConfig"></a>

```python
tls_config: CesToolsetMcpToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#tls_config CesToolset#tls_config}

---

### CesToolsetMcpToolsetApiAuthentication <a name="CesToolsetMcpToolsetApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthentication(
  api_key_config: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: CesToolsetMcpToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.oauthConfig"></a>

```python
oauth_config: CesToolsetMcpToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}

---

##### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}

---

##### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}

---

### CesToolsetMcpToolsetApiAuthenticationApiKeyConfig <a name="CesToolsetMcpToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. |

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#key_name CesToolset#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#request_location CesToolset#request_location}

---

### CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig <a name="CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig(
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token CesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token CesToolset#token}.

---

### CesToolsetMcpToolsetApiAuthenticationOauthConfig <a name="CesToolsetMcpToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig(
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
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_id CesToolset#client_id}

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig <a name="CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig(
  service_account: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account CesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig()
```


### CesToolsetMcpToolsetServiceDirectoryConfig <a name="CesToolsetMcpToolsetServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service CesToolset#service}

---

### CesToolsetMcpToolsetTlsConfig <a name="CesToolsetMcpToolsetTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetTlsConfig(
  ca_certs: IResolvable | typing.List[CesToolsetMcpToolsetTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[CesToolsetMcpToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}

---

### CesToolsetMcpToolsetTlsConfigCaCerts <a name="CesToolsetMcpToolsetTlsConfigCaCerts" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#cert CesToolset#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

### CesToolsetOpenApiToolset <a name="CesToolsetOpenApiToolset" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolset(
  open_api_schema: str,
  api_authentication: CesToolsetOpenApiToolsetApiAuthentication = None,
  ignore_unknown_fields: bool | IResolvable = None,
  service_directory_config: CesToolsetOpenApiToolsetServiceDirectoryConfig = None,
  tls_config: CesToolsetOpenApiToolsetTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.openApiSchema">open_api_schema</a></code> | <code>str</code> | The OpenAPI schema of the toolset. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.ignoreUnknownFields">ignore_unknown_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a></code> | tls_config block. |

---

##### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.openApiSchema"></a>

```python
open_api_schema: str
```

- *Type:* str

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#open_api_schema CesToolset#open_api_schema}

---

##### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.apiAuthentication"></a>

```python
api_authentication: CesToolsetOpenApiToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}

---

##### `ignore_unknown_fields`<sup>Optional</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.ignoreUnknownFields"></a>

```python
ignore_unknown_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#ignore_unknown_fields CesToolset#ignore_unknown_fields}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.serviceDirectoryConfig"></a>

```python
service_directory_config: CesToolsetOpenApiToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.tlsConfig"></a>

```python
tls_config: CesToolsetOpenApiToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#tls_config CesToolset#tls_config}

---

### CesToolsetOpenApiToolsetApiAuthentication <a name="CesToolsetOpenApiToolsetApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthentication(
  api_key_config: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig"></a>

```python
oauth_config: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}

---

##### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}

---

##### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}

---

### CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#key_name CesToolset#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#request_location CesToolset#request_location}

---

### CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig(
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token CesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token CesToolset#token}.

---

### CesToolsetOpenApiToolsetApiAuthenticationOauthConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig(
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
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_id CesToolset#client_id}

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig(
  service_account: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account CesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig()
```


### CesToolsetOpenApiToolsetServiceDirectoryConfig <a name="CesToolsetOpenApiToolsetServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service CesToolset#service}

---

### CesToolsetOpenApiToolsetTlsConfig <a name="CesToolsetOpenApiToolsetTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetTlsConfig(
  ca_certs: IResolvable | typing.List[CesToolsetOpenApiToolsetTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[CesToolsetOpenApiToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}

---

### CesToolsetOpenApiToolsetTlsConfigCaCerts <a name="CesToolsetOpenApiToolsetTlsConfigCaCerts" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#cert CesToolset#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

### CesToolsetTimeouts <a name="CesToolsetTimeouts" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#create CesToolset#create}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#delete CesToolset#delete}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#update CesToolset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#create CesToolset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#delete CesToolset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#update CesToolset#update}.

---

### CesToolsetToolFakeConfig <a name="CesToolsetToolFakeConfig" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetToolFakeConfig(
  code_block: CesToolsetToolFakeConfigCodeBlock = None,
  enable_fake_mode: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig.property.codeBlock">code_block</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a></code> | code_block block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig.property.enableFakeMode">enable_fake_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the tool is using fake mode. |

---

##### `code_block`<sup>Optional</sup> <a name="code_block" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig.property.codeBlock"></a>

```python
code_block: CesToolsetToolFakeConfigCodeBlock
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a>

code_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#code_block CesToolset#code_block}

---

##### `enable_fake_mode`<sup>Optional</sup> <a name="enable_fake_mode" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig.property.enableFakeMode"></a>

```python
enable_fake_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the tool is using fake mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#enable_fake_mode CesToolset#enable_fake_mode}

---

### CesToolsetToolFakeConfigCodeBlock <a name="CesToolsetToolFakeConfigCodeBlock" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetToolFakeConfigCodeBlock(
  python_code: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock.property.pythonCode">python_code</a></code> | <code>str</code> | Python code which will be invoked in tool fake mode. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

Python code which will be invoked in tool fake mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#python_code CesToolset#python_code}

---

## Classes <a name="Classes" id="Classes"></a>

### CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference <a name="CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a>

---


### CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference <a name="CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a>

---


### CesToolsetConnectorToolsetAuthConfigOutputReference <a name="CesToolsetConnectorToolsetAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2AuthCodeConfig">put_oauth2_auth_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2JwtBearerConfig">put_oauth2_jwt_bearer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resetOauth2AuthCodeConfig">reset_oauth2_auth_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resetOauth2JwtBearerConfig">reset_oauth2_jwt_bearer_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth2_auth_code_config` <a name="put_oauth2_auth_code_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2AuthCodeConfig"></a>

```python
def put_oauth2_auth_code_config(
  oauth_token: str
) -> None
```

###### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2AuthCodeConfig.parameter.oauthToken"></a>

- *Type:* str

Oauth token parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_token CesToolset#oauth_token}

---

##### `put_oauth2_jwt_bearer_config` <a name="put_oauth2_jwt_bearer_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2JwtBearerConfig"></a>

```python
def put_oauth2_jwt_bearer_config(
  client_key: str,
  issuer: str,
  subject: str
) -> None
```

###### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.clientKey"></a>

- *Type:* str

Client parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_key CesToolset#client_key}

---

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.issuer"></a>

- *Type:* str

Issuer parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#issuer CesToolset#issuer}

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.subject"></a>

- *Type:* str

Subject parameter name to pass through. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#subject CesToolset#subject}

---

##### `reset_oauth2_auth_code_config` <a name="reset_oauth2_auth_code_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resetOauth2AuthCodeConfig"></a>

```python
def reset_oauth2_auth_code_config() -> None
```

##### `reset_oauth2_jwt_bearer_config` <a name="reset_oauth2_jwt_bearer_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.resetOauth2JwtBearerConfig"></a>

```python
def reset_oauth2_jwt_bearer_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2AuthCodeConfig">oauth2_auth_code_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2JwtBearerConfig">oauth2_jwt_bearer_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2AuthCodeConfigInput">oauth2_auth_code_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2JwtBearerConfigInput">oauth2_jwt_bearer_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2_auth_code_config`<sup>Required</sup> <a name="oauth2_auth_code_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2AuthCodeConfig"></a>

```python
oauth2_auth_code_config: CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference</a>

---

##### `oauth2_jwt_bearer_config`<sup>Required</sup> <a name="oauth2_jwt_bearer_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2JwtBearerConfig"></a>

```python
oauth2_jwt_bearer_config: CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference</a>

---

##### `oauth2_auth_code_config_input`<sup>Optional</sup> <a name="oauth2_auth_code_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2AuthCodeConfigInput"></a>

```python
oauth2_auth_code_config_input: CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a>

---

##### `oauth2_jwt_bearer_config_input`<sup>Optional</sup> <a name="oauth2_jwt_bearer_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.oauth2JwtBearerConfigInput"></a>

```python
oauth2_jwt_bearer_config_input: CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetConnectorToolsetAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a>

---


### CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference <a name="CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation">CesToolsetConnectorToolsetConnectorActionsEntityOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetConnectorToolsetConnectorActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation">CesToolsetConnectorToolsetConnectorActionsEntityOperation</a>

---


### CesToolsetConnectorToolsetConnectorActionsList <a name="CesToolsetConnectorToolsetConnectorActionsList" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetConnectorActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolsetConnectorToolsetConnectorActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolsetConnectorToolsetConnectorActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]

---


### CesToolsetConnectorToolsetConnectorActionsOutputReference <a name="CesToolsetConnectorToolsetConnectorActionsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.putEntityOperation">put_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetConnectionActionId">reset_connection_action_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetEntityOperation">reset_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetInputFields">reset_input_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetOutputFields">reset_output_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_operation` <a name="put_entity_operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.putEntityOperation"></a>

```python
def put_entity_operation(
  entity_id: str,
  operation: str
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.putEntityOperation.parameter.entityId"></a>

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#entity_id CesToolset#entity_id}

---

###### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.putEntityOperation.parameter.operation"></a>

- *Type:* str

Operation to perform on the entity. Possible values: LIST GET CREATE UPDATE DELETE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#operation CesToolset#operation}

---

##### `reset_connection_action_id` <a name="reset_connection_action_id" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetConnectionActionId"></a>

```python
def reset_connection_action_id() -> None
```

##### `reset_entity_operation` <a name="reset_entity_operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetEntityOperation"></a>

```python
def reset_entity_operation() -> None
```

##### `reset_input_fields` <a name="reset_input_fields" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetInputFields"></a>

```python
def reset_input_fields() -> None
```

##### `reset_output_fields` <a name="reset_output_fields" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.resetOutputFields"></a>

```python
def reset_output_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference">CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.connectionActionIdInput">connection_action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.entityOperationInput">entity_operation_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation">CesToolsetConnectorToolsetConnectorActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.inputFieldsInput">input_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.outputFieldsInput">output_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_operation`<sup>Required</sup> <a name="entity_operation" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.entityOperation"></a>

```python
entity_operation: CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference">CesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference</a>

---

##### `connection_action_id_input`<sup>Optional</sup> <a name="connection_action_id_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.connectionActionIdInput"></a>

```python
connection_action_id_input: str
```

- *Type:* str

---

##### `entity_operation_input`<sup>Optional</sup> <a name="entity_operation_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.entityOperationInput"></a>

```python
entity_operation_input: CesToolsetConnectorToolsetConnectorActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsEntityOperation">CesToolsetConnectorToolsetConnectorActionsEntityOperation</a>

---

##### `input_fields_input`<sup>Optional</sup> <a name="input_fields_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.inputFieldsInput"></a>

```python
input_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields_input`<sup>Optional</sup> <a name="output_fields_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.outputFieldsInput"></a>

```python
output_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_action_id`<sup>Required</sup> <a name="connection_action_id" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

---

##### `input_fields`<sup>Required</sup> <a name="input_fields" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields`<sup>Required</sup> <a name="output_fields" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolsetConnectorToolsetConnectorActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>

---


### CesToolsetConnectorToolsetOutputReference <a name="CesToolsetConnectorToolsetOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetConnectorToolsetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putConnectorActions">put_connector_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.resetAuthConfig">reset_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_config` <a name="put_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putAuthConfig"></a>

```python
def put_auth_config(
  oauth2_auth_code_config: CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig = None,
  oauth2_jwt_bearer_config: CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig = None
) -> None
```

###### `oauth2_auth_code_config`<sup>Optional</sup> <a name="oauth2_auth_code_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putAuthConfig.parameter.oauth2AuthCodeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig">CesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth2_auth_code_config CesToolset#oauth2_auth_code_config}

---

###### `oauth2_jwt_bearer_config`<sup>Optional</sup> <a name="oauth2_jwt_bearer_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putAuthConfig.parameter.oauth2JwtBearerConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig">CesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth2_jwt_bearer_config CesToolset#oauth2_jwt_bearer_config}

---

##### `put_connector_actions` <a name="put_connector_actions" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putConnectorActions"></a>

```python
def put_connector_actions(
  value: IResolvable | typing.List[CesToolsetConnectorToolsetConnectorActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.putConnectorActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]

---

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference">CesToolsetConnectorToolsetAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connectorActions">connector_actions</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList">CesToolsetConnectorToolsetConnectorActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.authConfigInput">auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connectionInput">connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connectorActionsInput">connector_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connection">connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.authConfig"></a>

```python
auth_config: CesToolsetConnectorToolsetAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfigOutputReference">CesToolsetConnectorToolsetAuthConfigOutputReference</a>

---

##### `connector_actions`<sup>Required</sup> <a name="connector_actions" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connectorActions"></a>

```python
connector_actions: CesToolsetConnectorToolsetConnectorActionsList
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActionsList">CesToolsetConnectorToolsetConnectorActionsList</a>

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.authConfigInput"></a>

```python
auth_config_input: CesToolsetConnectorToolsetAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetAuthConfig">CesToolsetConnectorToolsetAuthConfig</a>

---

##### `connection_input`<sup>Optional</sup> <a name="connection_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connectionInput"></a>

```python
connection_input: str
```

- *Type:* str

---

##### `connector_actions_input`<sup>Optional</sup> <a name="connector_actions_input" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connectorActionsInput"></a>

```python
connector_actions_input: IResolvable | typing.List[CesToolsetConnectorToolsetConnectorActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetConnectorActions">CesToolsetConnectorToolsetConnectorActions</a>]

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetConnectorToolsetOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetConnectorToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetConnectorToolset">CesToolsetConnectorToolset</a>

---


### CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">client_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_version_input`<sup>Optional</sup> <a name="client_secret_version_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```python
client_secret_version_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">put_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">put_service_agent_id_token_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">reset_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">reset_service_agent_id_token_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
) -> None
```

###### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}

---

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#key_name CesToolset#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#request_location CesToolset#request_location}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  token: str = None
) -> None
```

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token CesToolset#token}.

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_id CesToolset#client_id}

---

###### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientSecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

##### `put_service_account_auth_config` <a name="put_service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```python
def put_service_account_auth_config(
  service_account: str,
  scopes: typing.List[str] = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.serviceAccount"></a>

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account CesToolset#service_account}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

##### `put_service_agent_id_token_auth_config` <a name="put_service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```python
def put_service_agent_id_token_auth_config() -> None
```

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_account_auth_config` <a name="reset_service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```python
def reset_service_account_auth_config() -> None
```

##### `reset_service_agent_id_token_auth_config` <a name="reset_service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```python
def reset_service_agent_id_token_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">service_account_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">service_agent_id_token_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `service_agent_id_token_auth_config`<sup>Required</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: CesToolsetMcpToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `service_account_auth_config_input`<sup>Optional</sup> <a name="service_account_auth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```python
service_account_auth_config_input: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `service_agent_id_token_auth_config_input`<sup>Optional</sup> <a name="service_agent_id_token_auth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```python
service_agent_id_token_auth_config_input: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

---


### CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolsetMcpToolsetOutputReference <a name="CesToolsetMcpToolsetOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication">put_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetApiAuthentication">reset_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetCustomHeaders">reset_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_authentication` <a name="put_api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication"></a>

```python
def put_api_authentication(
  api_key_config: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: CesToolsetMcpToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}

---

###### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.serviceAccountAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}

---

###### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.serviceAgentIdTokenAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service CesToolset#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[CesToolsetMcpToolsetTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}

---

##### `reset_api_authentication` <a name="reset_api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetApiAuthentication"></a>

```python
def reset_api_authentication() -> None
```

##### `reset_custom_headers` <a name="reset_custom_headers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetCustomHeaders"></a>

```python
def reset_custom_headers() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference">CesToolsetMcpToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference">CesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference">CesToolsetMcpToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput">api_authentication_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeadersInput">custom_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddressInput">server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeaders">custom_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddress">server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthentication"></a>

```python
api_authentication: CesToolsetMcpToolsetApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference">CesToolsetMcpToolsetApiAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: CesToolsetMcpToolsetServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference">CesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfig"></a>

```python
tls_config: CesToolsetMcpToolsetTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference">CesToolsetMcpToolsetTlsConfigOutputReference</a>

---

##### `api_authentication_input`<sup>Optional</sup> <a name="api_authentication_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput"></a>

```python
api_authentication_input: CesToolsetMcpToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

---

##### `custom_headers_input`<sup>Optional</sup> <a name="custom_headers_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeadersInput"></a>

```python
custom_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `server_address_input`<sup>Optional</sup> <a name="server_address_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddressInput"></a>

```python
server_address_input: str
```

- *Type:* str

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: CesToolsetMcpToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: CesToolsetMcpToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeaders"></a>

```python
custom_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

---


### CesToolsetMcpToolsetServiceDirectoryConfigOutputReference <a name="CesToolsetMcpToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

---


### CesToolsetMcpToolsetTlsConfigCaCertsList <a name="CesToolsetMcpToolsetTlsConfigCaCertsList" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolsetMcpToolsetTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolsetMcpToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]

---


### CesToolsetMcpToolsetTlsConfigCaCertsOutputReference <a name="CesToolsetMcpToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolsetMcpToolsetTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>

---


### CesToolsetMcpToolsetTlsConfigOutputReference <a name="CesToolsetMcpToolsetTlsConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[CesToolsetMcpToolsetTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList">CesToolsetMcpToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: CesToolsetMcpToolsetTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList">CesToolsetMcpToolsetTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[CesToolsetMcpToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetMcpToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">client_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_version_input`<sup>Optional</sup> <a name="client_secret_version_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```python
client_secret_version_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">put_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">put_service_agent_id_token_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">reset_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">reset_service_agent_id_token_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
) -> None
```

###### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}

---

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#key_name CesToolset#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#request_location CesToolset#request_location}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  token: str = None
) -> None
```

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token CesToolset#token}.

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_id CesToolset#client_id}

---

###### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientSecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

##### `put_service_account_auth_config` <a name="put_service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```python
def put_service_account_auth_config(
  service_account: str,
  scopes: typing.List[str] = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.serviceAccount"></a>

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account CesToolset#service_account}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

##### `put_service_agent_id_token_auth_config` <a name="put_service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```python
def put_service_agent_id_token_auth_config() -> None
```

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_account_auth_config` <a name="reset_service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```python
def reset_service_account_auth_config() -> None
```

##### `reset_service_agent_id_token_auth_config` <a name="reset_service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```python
def reset_service_agent_id_token_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">service_account_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">service_agent_id_token_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `service_agent_id_token_auth_config`<sup>Required</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `service_account_auth_config_input`<sup>Optional</sup> <a name="service_account_auth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```python
service_account_auth_config_input: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `service_agent_id_token_auth_config_input`<sup>Optional</sup> <a name="service_agent_id_token_auth_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```python
service_agent_id_token_auth_config_input: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolsetOpenApiToolsetOutputReference <a name="CesToolsetOpenApiToolsetOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication">put_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetApiAuthentication">reset_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields">reset_ignore_unknown_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_authentication` <a name="put_api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication"></a>

```python
def put_api_authentication(
  api_key_config: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}

---

###### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.serviceAccountAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}

---

###### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.serviceAgentIdTokenAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#service CesToolset#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[CesToolsetOpenApiToolsetTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}

---

##### `reset_api_authentication` <a name="reset_api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetApiAuthentication"></a>

```python
def reset_api_authentication() -> None
```

##### `reset_ignore_unknown_fields` <a name="reset_ignore_unknown_fields" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields"></a>

```python
def reset_ignore_unknown_fields() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference">CesToolsetOpenApiToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput">api_authentication_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput">ignore_unknown_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput">open_api_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields">ignore_unknown_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchema">open_api_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthentication"></a>

```python
api_authentication: CesToolsetOpenApiToolsetApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfig"></a>

```python
tls_config: CesToolsetOpenApiToolsetTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference">CesToolsetOpenApiToolsetTlsConfigOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `api_authentication_input`<sup>Optional</sup> <a name="api_authentication_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput"></a>

```python
api_authentication_input: CesToolsetOpenApiToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `ignore_unknown_fields_input`<sup>Optional</sup> <a name="ignore_unknown_fields_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput"></a>

```python
ignore_unknown_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `open_api_schema_input`<sup>Optional</sup> <a name="open_api_schema_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput"></a>

```python
open_api_schema_input: str
```

- *Type:* str

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: CesToolsetOpenApiToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: CesToolsetOpenApiToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

---

##### `ignore_unknown_fields`<sup>Required</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields"></a>

```python
ignore_unknown_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchema"></a>

```python
open_api_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolset
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

---


### CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference <a name="CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---


### CesToolsetOpenApiToolsetTlsConfigCaCertsList <a name="CesToolsetOpenApiToolsetTlsConfigCaCertsList" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolsetOpenApiToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

---


### CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference <a name="CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolsetOpenApiToolsetTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>

---


### CesToolsetOpenApiToolsetTlsConfigOutputReference <a name="CesToolsetOpenApiToolsetTlsConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[CesToolsetOpenApiToolsetTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList">CesToolsetOpenApiToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: CesToolsetOpenApiToolsetTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList">CesToolsetOpenApiToolsetTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[CesToolsetOpenApiToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetOpenApiToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

---


### CesToolsetTimeoutsOutputReference <a name="CesToolsetTimeoutsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolsetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

---


### CesToolsetToolFakeConfigCodeBlockOutputReference <a name="CesToolsetToolFakeConfigCodeBlockOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetToolFakeConfigCodeBlock
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a>

---


### CesToolsetToolFakeConfigOutputReference <a name="CesToolsetToolFakeConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_toolset

cesToolset.CesToolsetToolFakeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.putCodeBlock">put_code_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resetCodeBlock">reset_code_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resetEnableFakeMode">reset_enable_fake_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_block` <a name="put_code_block" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.putCodeBlock"></a>

```python
def put_code_block(
  python_code: str
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.putCodeBlock.parameter.pythonCode"></a>

- *Type:* str

Python code which will be invoked in tool fake mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_toolset#python_code CesToolset#python_code}

---

##### `reset_code_block` <a name="reset_code_block" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resetCodeBlock"></a>

```python
def reset_code_block() -> None
```

##### `reset_enable_fake_mode` <a name="reset_enable_fake_mode" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.resetEnableFakeMode"></a>

```python
def reset_enable_fake_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.codeBlock">code_block</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference">CesToolsetToolFakeConfigCodeBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.codeBlockInput">code_block_input</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.enableFakeModeInput">enable_fake_mode_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.enableFakeMode">enable_fake_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_block`<sup>Required</sup> <a name="code_block" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.codeBlock"></a>

```python
code_block: CesToolsetToolFakeConfigCodeBlockOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlockOutputReference">CesToolsetToolFakeConfigCodeBlockOutputReference</a>

---

##### `code_block_input`<sup>Optional</sup> <a name="code_block_input" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.codeBlockInput"></a>

```python
code_block_input: CesToolsetToolFakeConfigCodeBlock
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigCodeBlock">CesToolsetToolFakeConfigCodeBlock</a>

---

##### `enable_fake_mode_input`<sup>Optional</sup> <a name="enable_fake_mode_input" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.enableFakeModeInput"></a>

```python
enable_fake_mode_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_fake_mode`<sup>Required</sup> <a name="enable_fake_mode" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.enableFakeMode"></a>

```python
enable_fake_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolsetToolFakeConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetToolFakeConfig">CesToolsetToolFakeConfig</a>

---




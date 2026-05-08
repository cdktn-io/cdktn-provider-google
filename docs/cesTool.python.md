# `cesTool` Submodule <a name="`cesTool` Submodule" id="@cdktn/provider-google.cesTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesTool <a name="CesTool" id="@cdktn/provider-google.cesTool.CesTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool google_ces_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesTool.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesTool(
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
  tool_id: str,
  client_function: CesToolClientFunction = None,
  data_store_tool: CesToolDataStoreTool = None,
  execution_type: str = None,
  google_search_tool: CesToolGoogleSearchTool = None,
  id: str = None,
  project: str = None,
  python_function: CesToolPythonFunction = None,
  timeouts: CesToolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.toolId">tool_id</a></code> | <code>str</code> | The ID to use for the tool, which will become the final component of the tool's resource name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.clientFunction">client_function</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | client_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.dataStoreTool">data_store_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | data_store_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.googleSearchTool">google_search_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | google_search_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#id CesTool#id}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#project CesTool#project}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.pythonFunction">python_function</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | python_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#app CesTool#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#location CesTool#location}

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.toolId"></a>

- *Type:* str

The ID to use for the tool, which will become the final component of the tool's resource name.

If not provided, a unique ID will be
automatically assigned for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#tool_id CesTool#tool_id}

---

##### `client_function`<sup>Optional</sup> <a name="client_function" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.clientFunction"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

client_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#client_function CesTool#client_function}

---

##### `data_store_tool`<sup>Optional</sup> <a name="data_store_tool" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.dataStoreTool"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

data_store_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store_tool CesTool#data_store_tool}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.executionType"></a>

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#execution_type CesTool#execution_type}

---

##### `google_search_tool`<sup>Optional</sup> <a name="google_search_tool" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.googleSearchTool"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

google_search_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#google_search_tool CesTool#google_search_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#id CesTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#project CesTool#project}.

---

##### `python_function`<sup>Optional</sup> <a name="python_function" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.pythonFunction"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

python_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#python_function CesTool#python_function}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#timeouts CesTool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putClientFunction">put_client_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putDataStoreTool">put_data_store_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool">put_google_search_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putPythonFunction">put_python_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetClientFunction">reset_client_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetDataStoreTool">reset_data_store_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetExecutionType">reset_execution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetGoogleSearchTool">reset_google_search_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetPythonFunction">reset_python_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesTool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesTool.CesTool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesTool.CesTool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesTool.CesTool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesTool.CesTool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesTool.CesTool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesTool.CesTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesTool.CesTool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesTool.CesTool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesTool.CesTool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesTool.CesTool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesTool.CesTool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesTool.CesTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesTool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesTool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesTool.CesTool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesTool.CesTool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesTool.CesTool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesTool.CesTool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesTool.CesTool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesTool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesTool.CesTool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_function` <a name="put_client_function" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction"></a>

```python
def put_client_function(
  name: str,
  description: str = None,
  parameters: CesToolClientFunctionParameters = None,
  response: CesToolClientFunctionResponse = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction.parameter.name"></a>

- *Type:* str

The function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction.parameter.description"></a>

- *Type:* str

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#parameters CesTool#parameters}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction.parameter.response"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#response CesTool#response}

---

##### `put_data_store_tool` <a name="put_data_store_tool" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool"></a>

```python
def put_data_store_tool(
  name: str,
  boost_specs: IResolvable | typing.List[CesToolDataStoreToolBoostSpecs] = None,
  description: str = None,
  engine_source: CesToolDataStoreToolEngineSource = None,
  max_results: typing.Union[int, float] = None,
  modality_configs: IResolvable | typing.List[CesToolDataStoreToolModalityConfigs] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.name"></a>

- *Type:* str

The data store tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

###### `boost_specs`<sup>Optional</sup> <a name="boost_specs" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.boostSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]

boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_specs CesTool#boost_specs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.description"></a>

- *Type:* str

The tool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

###### `engine_source`<sup>Optional</sup> <a name="engine_source" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.engineSource"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

engine_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#engine_source CesTool#engine_source}

---

###### `max_results`<sup>Optional</sup> <a name="max_results" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.maxResults"></a>

- *Type:* typing.Union[int, float]

Number of search results to return per query. The default value is 10. The maximum allowed value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_results CesTool#max_results}

---

###### `modality_configs`<sup>Optional</sup> <a name="modality_configs" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.modalityConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]

modality_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#modality_configs CesTool#modality_configs}

---

##### `put_google_search_tool` <a name="put_google_search_tool" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool"></a>

```python
def put_google_search_tool(
  name: str,
  context_urls: typing.List[str] = None,
  description: str = None,
  exclude_domains: typing.List[str] = None,
  preferred_domains: typing.List[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.name"></a>

- *Type:* str

The name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

###### `context_urls`<sup>Optional</sup> <a name="context_urls" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.contextUrls"></a>

- *Type:* typing.List[str]

Content will be fetched directly from these URLs for context and grounding.

More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#context_urls CesTool#context_urls}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.description"></a>

- *Type:* str

Description of the tool's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

###### `exclude_domains`<sup>Optional</sup> <a name="exclude_domains" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.excludeDomains"></a>

- *Type:* typing.List[str]

List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#exclude_domains CesTool#exclude_domains}

---

###### `preferred_domains`<sup>Optional</sup> <a name="preferred_domains" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.preferredDomains"></a>

- *Type:* typing.List[str]

Specifies domain names to guide the search.

The model will be instructed to prioritize these domains
when formulating queries for google search.
This is a best-effort hint and these domains may or may
not be exclusively reflected in the final search results.
Example: "example.com", "another.site".
A maximum of 20 domains can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#preferred_domains CesTool#preferred_domains}

---

##### `put_python_function` <a name="put_python_function" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction"></a>

```python
def put_python_function(
  name: str = None,
  python_code: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction.parameter.name"></a>

- *Type:* str

The name of the Python function to execute.

Must match a Python function
name defined in the python code. Case sensitive. If the name is not
provided, the first function defined in the python code will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

###### `python_code`<sup>Optional</sup> <a name="python_code" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction.parameter.pythonCode"></a>

- *Type:* str

The Python code to execute for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#python_code CesTool#python_code}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#create CesTool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#delete CesTool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#update CesTool#update}.

---

##### `reset_client_function` <a name="reset_client_function" id="@cdktn/provider-google.cesTool.CesTool.resetClientFunction"></a>

```python
def reset_client_function() -> None
```

##### `reset_data_store_tool` <a name="reset_data_store_tool" id="@cdktn/provider-google.cesTool.CesTool.resetDataStoreTool"></a>

```python
def reset_data_store_tool() -> None
```

##### `reset_execution_type` <a name="reset_execution_type" id="@cdktn/provider-google.cesTool.CesTool.resetExecutionType"></a>

```python
def reset_execution_type() -> None
```

##### `reset_google_search_tool` <a name="reset_google_search_tool" id="@cdktn/provider-google.cesTool.CesTool.resetGoogleSearchTool"></a>

```python
def reset_google_search_tool() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesTool.CesTool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesTool.CesTool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_python_function` <a name="reset_python_function" id="@cdktn/provider-google.cesTool.CesTool.resetPythonFunction"></a>

```python
def reset_python_function() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesTool.CesTool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesTool.CesTool.isConstruct"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesTool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesTool.CesTool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesTool.CesTool.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesTool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesTool.CesTool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesTool.CesTool.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesTool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesTool.CesTool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesTool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesTool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.clientFunction">client_function</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference">CesToolClientFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dataStoreTool">data_store_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference">CesToolDataStoreToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.generatedSummary">generated_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.googleSearchTool">google_search_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference">CesToolGoogleSearchToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.openApiTool">open_api_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList">CesToolOpenApiToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.pythonFunction">python_function</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference">CesToolPythonFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.systemTool">system_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList">CesToolSystemToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference">CesToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.clientFunctionInput">client_function_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dataStoreToolInput">data_store_tool_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.executionTypeInput">execution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.googleSearchToolInput">google_search_tool_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.pythonFunctionInput">python_function_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.executionType">execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesTool.CesTool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesTool.CesTool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesTool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesTool.CesTool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesTool.CesTool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesTool.CesTool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesTool.CesTool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesTool.CesTool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesTool.CesTool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesTool.CesTool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesTool.CesTool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesTool.CesTool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesTool.CesTool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `client_function`<sup>Required</sup> <a name="client_function" id="@cdktn/provider-google.cesTool.CesTool.property.clientFunction"></a>

```python
client_function: CesToolClientFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference">CesToolClientFunctionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesTool.CesTool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_store_tool`<sup>Required</sup> <a name="data_store_tool" id="@cdktn/provider-google.cesTool.CesTool.property.dataStoreTool"></a>

```python
data_store_tool: CesToolDataStoreToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference">CesToolDataStoreToolOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesTool.CesTool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesTool.CesTool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `generated_summary`<sup>Required</sup> <a name="generated_summary" id="@cdktn/provider-google.cesTool.CesTool.property.generatedSummary"></a>

```python
generated_summary: str
```

- *Type:* str

---

##### `google_search_tool`<sup>Required</sup> <a name="google_search_tool" id="@cdktn/provider-google.cesTool.CesTool.property.googleSearchTool"></a>

```python
google_search_tool: CesToolGoogleSearchToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference">CesToolGoogleSearchToolOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesTool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_tool`<sup>Required</sup> <a name="open_api_tool" id="@cdktn/provider-google.cesTool.CesTool.property.openApiTool"></a>

```python
open_api_tool: CesToolOpenApiToolList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList">CesToolOpenApiToolList</a>

---

##### `python_function`<sup>Required</sup> <a name="python_function" id="@cdktn/provider-google.cesTool.CesTool.property.pythonFunction"></a>

```python
python_function: CesToolPythonFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference">CesToolPythonFunctionOutputReference</a>

---

##### `system_tool`<sup>Required</sup> <a name="system_tool" id="@cdktn/provider-google.cesTool.CesTool.property.systemTool"></a>

```python
system_tool: CesToolSystemToolList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList">CesToolSystemToolList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesTool.CesTool.property.timeouts"></a>

```python
timeouts: CesToolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference">CesToolTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesTool.CesTool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google.cesTool.CesTool.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `client_function_input`<sup>Optional</sup> <a name="client_function_input" id="@cdktn/provider-google.cesTool.CesTool.property.clientFunctionInput"></a>

```python
client_function_input: CesToolClientFunction
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---

##### `data_store_tool_input`<sup>Optional</sup> <a name="data_store_tool_input" id="@cdktn/provider-google.cesTool.CesTool.property.dataStoreToolInput"></a>

```python
data_store_tool_input: CesToolDataStoreTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---

##### `execution_type_input`<sup>Optional</sup> <a name="execution_type_input" id="@cdktn/provider-google.cesTool.CesTool.property.executionTypeInput"></a>

```python
execution_type_input: str
```

- *Type:* str

---

##### `google_search_tool_input`<sup>Optional</sup> <a name="google_search_tool_input" id="@cdktn/provider-google.cesTool.CesTool.property.googleSearchToolInput"></a>

```python
google_search_tool_input: CesToolGoogleSearchTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesTool.CesTool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesTool.CesTool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesTool.CesTool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `python_function_input`<sup>Optional</sup> <a name="python_function_input" id="@cdktn/provider-google.cesTool.CesTool.property.pythonFunctionInput"></a>

```python
python_function_input: CesToolPythonFunction
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesTool.CesTool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google.cesTool.CesTool.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesTool.CesTool.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `execution_type`<sup>Required</sup> <a name="execution_type" id="@cdktn/provider-google.cesTool.CesTool.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesTool.CesTool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesTool.CesTool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google.cesTool.CesTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesTool.CesTool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesToolClientFunction <a name="CesToolClientFunction" id="@cdktn/provider-google.cesTool.CesToolClientFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunction.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolClientFunction(
  name: str,
  description: str = None,
  parameters: CesToolClientFunctionParameters = None,
  response: CesToolClientFunctionResponse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.name">name</a></code> | <code>str</code> | The function name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.description">description</a></code> | <code>str</code> | The function description. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | parameters block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.response">response</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | response block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.name"></a>

```python
name: str
```

- *Type:* str

The function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.description"></a>

```python
description: str
```

- *Type:* str

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.parameters"></a>

```python
parameters: CesToolClientFunctionParameters
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#parameters CesTool#parameters}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.response"></a>

```python
response: CesToolClientFunctionResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#response CesTool#response}

---

### CesToolClientFunctionParameters <a name="CesToolClientFunctionParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolClientFunctionParameters(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.type">type</a></code> | <code>str</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.additionalProperties">additional_properties</a></code> | <code>str</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.anyOf">any_of</a></code> | <code>str</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.default">default</a></code> | <code>str</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.defs">defs</a></code> | <code>str</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.description">description</a></code> | <code>str</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.enum">enum</a></code> | <code>typing.List[str]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.items">items</a></code> | <code>str</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.prefixItems">prefix_items</a></code> | <code>str</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.properties">properties</a></code> | <code>str</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.ref">ref</a></code> | <code>str</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.required">required</a></code> | <code>typing.List[str]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.title">title</a></code> | <code>str</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#type CesTool#type}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.default"></a>

```python
default: str
```

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#default CesTool#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.defs"></a>

```python
defs: str
```

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#defs CesTool#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#enum CesTool#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.items"></a>

```python
items: str
```

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#items CesTool#items}

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

##### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

##### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.properties"></a>

```python
properties: str
```

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#properties CesTool#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.ref"></a>

```python
ref: str
```

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#ref CesTool#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#required CesTool#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#title CesTool#title}

---

##### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

### CesToolClientFunctionResponse <a name="CesToolClientFunctionResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolClientFunctionResponse(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.type">type</a></code> | <code>str</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.additionalProperties">additional_properties</a></code> | <code>str</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.anyOf">any_of</a></code> | <code>str</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.default">default</a></code> | <code>str</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.defs">defs</a></code> | <code>str</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.description">description</a></code> | <code>str</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.enum">enum</a></code> | <code>typing.List[str]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.items">items</a></code> | <code>str</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.prefixItems">prefix_items</a></code> | <code>str</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.properties">properties</a></code> | <code>str</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.ref">ref</a></code> | <code>str</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.required">required</a></code> | <code>typing.List[str]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.title">title</a></code> | <code>str</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#type CesTool#type}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.default"></a>

```python
default: str
```

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#default CesTool#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.defs"></a>

```python
defs: str
```

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#defs CesTool#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#enum CesTool#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.items"></a>

```python
items: str
```

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#items CesTool#items}

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

##### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

##### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.properties"></a>

```python
properties: str
```

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#properties CesTool#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.ref"></a>

```python
ref: str
```

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#ref CesTool#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#required CesTool#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#title CesTool#title}

---

##### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

### CesToolConfig <a name="CesToolConfig" id="@cdktn/provider-google.cesTool.CesToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  location: str,
  tool_id: str,
  client_function: CesToolClientFunction = None,
  data_store_tool: CesToolDataStoreTool = None,
  execution_type: str = None,
  google_search_tool: CesToolGoogleSearchTool = None,
  id: str = None,
  project: str = None,
  python_function: CesToolPythonFunction = None,
  timeouts: CesToolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.toolId">tool_id</a></code> | <code>str</code> | The ID to use for the tool, which will become the final component of the tool's resource name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.clientFunction">client_function</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | client_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.dataStoreTool">data_store_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | data_store_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.googleSearchTool">google_search_tool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | google_search_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#id CesTool#id}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#project CesTool#project}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.pythonFunction">python_function</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | python_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesTool.CesToolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesTool.CesToolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesTool.CesToolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesTool.CesToolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesTool.CesToolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesToolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesTool.CesToolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesTool.CesToolConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#app CesTool#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesTool.CesToolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#location CesTool#location}

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google.cesTool.CesToolConfig.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

The ID to use for the tool, which will become the final component of the tool's resource name.

If not provided, a unique ID will be
automatically assigned for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#tool_id CesTool#tool_id}

---

##### `client_function`<sup>Optional</sup> <a name="client_function" id="@cdktn/provider-google.cesTool.CesToolConfig.property.clientFunction"></a>

```python
client_function: CesToolClientFunction
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

client_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#client_function CesTool#client_function}

---

##### `data_store_tool`<sup>Optional</sup> <a name="data_store_tool" id="@cdktn/provider-google.cesTool.CesToolConfig.property.dataStoreTool"></a>

```python
data_store_tool: CesToolDataStoreTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

data_store_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store_tool CesTool#data_store_tool}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google.cesTool.CesToolConfig.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#execution_type CesTool#execution_type}

---

##### `google_search_tool`<sup>Optional</sup> <a name="google_search_tool" id="@cdktn/provider-google.cesTool.CesToolConfig.property.googleSearchTool"></a>

```python
google_search_tool: CesToolGoogleSearchTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

google_search_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#google_search_tool CesTool#google_search_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesToolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#id CesTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesTool.CesToolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#project CesTool#project}.

---

##### `python_function`<sup>Optional</sup> <a name="python_function" id="@cdktn/provider-google.cesTool.CesToolConfig.property.pythonFunction"></a>

```python
python_function: CesToolPythonFunction
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

python_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#python_function CesTool#python_function}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesTool.CesToolConfig.property.timeouts"></a>

```python
timeouts: CesToolTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#timeouts CesTool#timeouts}

---

### CesToolDataStoreTool <a name="CesToolDataStoreTool" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreTool(
  name: str,
  boost_specs: IResolvable | typing.List[CesToolDataStoreToolBoostSpecs] = None,
  description: str = None,
  engine_source: CesToolDataStoreToolEngineSource = None,
  max_results: typing.Union[int, float] = None,
  modality_configs: IResolvable | typing.List[CesToolDataStoreToolModalityConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.name">name</a></code> | <code>str</code> | The data store tool name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.boostSpecs">boost_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]</code> | boost_specs block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.description">description</a></code> | <code>str</code> | The tool description. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.engineSource">engine_source</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | engine_source block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | Number of search results to return per query. The default value is 10. The maximum allowed value is 10. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.modalityConfigs">modality_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]</code> | modality_configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.name"></a>

```python
name: str
```

- *Type:* str

The data store tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `boost_specs`<sup>Optional</sup> <a name="boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.boostSpecs"></a>

```python
boost_specs: IResolvable | typing.List[CesToolDataStoreToolBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]

boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_specs CesTool#boost_specs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.description"></a>

```python
description: str
```

- *Type:* str

The tool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `engine_source`<sup>Optional</sup> <a name="engine_source" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.engineSource"></a>

```python
engine_source: CesToolDataStoreToolEngineSource
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

engine_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#engine_source CesTool#engine_source}

---

##### `max_results`<sup>Optional</sup> <a name="max_results" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of search results to return per query. The default value is 10. The maximum allowed value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_results CesTool#max_results}

---

##### `modality_configs`<sup>Optional</sup> <a name="modality_configs" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.modalityConfigs"></a>

```python
modality_configs: IResolvable | typing.List[CesToolDataStoreToolModalityConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]

modality_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#modality_configs CesTool#modality_configs}

---

### CesToolDataStoreToolBoostSpecs <a name="CesToolDataStoreToolBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecs(
  data_stores: typing.List[str],
  spec: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpec]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.dataStores">data_stores</a></code> | <code>typing.List[str]</code> | The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.spec">spec</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]</code> | spec block. |

---

##### `data_stores`<sup>Required</sup> <a name="data_stores" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.dataStores"></a>

```python
data_stores: typing.List[str]
```

- *Type:* typing.List[str]

The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_stores CesTool#data_stores}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.spec"></a>

```python
spec: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#spec CesTool#spec}

---

### CesToolDataStoreToolBoostSpecsSpec <a name="CesToolDataStoreToolBoostSpecsSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpec(
  condition_boost_specs: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs">condition_boost_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]</code> | condition_boost_specs block. |

---

##### `condition_boost_specs`<sup>Required</sup> <a name="condition_boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs"></a>

```python
condition_boost_specs: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

condition_boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#condition_boost_specs CesTool#condition_boost_specs}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs(
  condition: str,
  boost: typing.Union[int, float] = None,
  boost_control_spec: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition">condition</a></code> | <code>str</code> | An expression which specifies a boost condition. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost">boost</a></code> | <code>typing.Union[int, float]</code> | Strength of the boost, which should be in [-1, 1]. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec">boost_control_spec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | boost_control_spec block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition"></a>

```python
condition: str
```

- *Type:* str

An expression which specifies a boost condition.

The syntax is the same
as filter expression syntax. Currently, the only supported condition is
a list of BCP-47 lang codes.
Example: To boost suggestions in languages en or fr:
(lang_code: ANY("en", "fr"))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#condition CesTool#condition}

---

##### `boost`<sup>Optional</sup> <a name="boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost"></a>

```python
boost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Strength of the boost, which should be in [-1, 1].

Negative boost means
demotion. Default is 0.0.
Setting to 1.0 gives the suggestions a big promotion. However, it does
not necessarily mean that the top result will be a boosted suggestion.
Setting to -1.0 gives the suggestions a big demotion. However, other
suggestions that are relevant might still be shown.
Setting to 0.0 means no boost applied. The boosting condition is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost CesTool#boost}

---

##### `boost_control_spec`<sup>Optional</sup> <a name="boost_control_spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec"></a>

```python
boost_control_spec: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

boost_control_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_control_spec CesTool#boost_control_spec}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec(
  attribute_type: str = None,
  control_points: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints] = None,
  field_name: str = None,
  interpolation_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType">attribute_type</a></code> | <code>str</code> | The attribute type to be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints">control_points</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]</code> | control_points block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType">interpolation_type</a></code> | <code>str</code> | The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR. |

---

##### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

The attribute type to be used to determine the boost amount.

The
attribute value can be derived from the field value of the specified
field_name. In the case of numerical it is straightforward i.e.
attribute_value = numerical_field_value. In the case of freshness
however, attribute_value = (time.now() - datetime_field_value).
Possible values:
NUMERICAL
FRESHNESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#attribute_type CesTool#attribute_type}

---

##### `control_points`<sup>Optional</sup> <a name="control_points" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints"></a>

```python
control_points: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

control_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#control_points CesTool#control_points}

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#field_name CesTool#field_name}

---

##### `interpolation_type`<sup>Optional</sup> <a name="interpolation_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType"></a>

```python
interpolation_type: str
```

- *Type:* str

The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#interpolation_type CesTool#interpolation_type}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints(
  attribute_value: str = None,
  boost_amount: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue">attribute_value</a></code> | <code>str</code> | Can be one of: 1. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount">boost_amount</a></code> | <code>typing.Union[int, float]</code> | The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above. |

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Can be one of: 1.

The numerical field value.
2. The duration spec for freshness:
The value must be formatted as an XSD 'dayTimeDuration' value (a
restricted subset of an ISO 8601 duration value). The pattern for
this is: 'nDnM]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#attribute_value CesTool#attribute_value}

---

##### `boost_amount`<sup>Optional</sup> <a name="boost_amount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount"></a>

```python
boost_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_amount CesTool#boost_amount}

---

### CesToolDataStoreToolEngineSource <a name="CesToolDataStoreToolEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSource(
  engine: str,
  data_store_sources: IResolvable | typing.List[CesToolDataStoreToolEngineSourceDataStoreSources] = None,
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.engine">engine</a></code> | <code>str</code> | Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.dataStoreSources">data_store_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]</code> | data_store_sources block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.filter">filter</a></code> | <code>str</code> | A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.engine"></a>

```python
engine: str
```

- *Type:* str

Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#engine CesTool#engine}

---

##### `data_store_sources`<sup>Optional</sup> <a name="data_store_sources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.dataStoreSources"></a>

```python
data_store_sources: IResolvable | typing.List[CesToolDataStoreToolEngineSourceDataStoreSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]

data_store_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store_sources CesTool#data_store_sources}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.filter"></a>

```python
filter: str
```

- *Type:* str

A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#filter CesTool#filter}

---

### CesToolDataStoreToolEngineSourceDataStoreSources <a name="CesToolDataStoreToolEngineSourceDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSources(
  data_store: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore = None,
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.filter">filter</a></code> | <code>str</code> | Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore"></a>

```python
data_store: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store CesTool#data_store}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#filter CesTool#filter}

---

### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name">name</a></code> | <code>str</code> | Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name"></a>

```python
name: str
```

- *Type:* str

Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig()
```


### CesToolDataStoreToolModalityConfigs <a name="CesToolDataStoreToolModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigs(
  modality_type: str,
  grounding_config: CesToolDataStoreToolModalityConfigsGroundingConfig = None,
  rewriter_config: CesToolDataStoreToolModalityConfigsRewriterConfig = None,
  summarization_config: CesToolDataStoreToolModalityConfigsSummarizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.modalityType">modality_type</a></code> | <code>str</code> | The modality type. Possible values: TEXT AUDIO. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.groundingConfig">grounding_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | grounding_config block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.rewriterConfig">rewriter_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | rewriter_config block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | summarization_config block. |

---

##### `modality_type`<sup>Required</sup> <a name="modality_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.modalityType"></a>

```python
modality_type: str
```

- *Type:* str

The modality type. Possible values: TEXT AUDIO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#modality_type CesTool#modality_type}

---

##### `grounding_config`<sup>Optional</sup> <a name="grounding_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.groundingConfig"></a>

```python
grounding_config: CesToolDataStoreToolModalityConfigsGroundingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

grounding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#grounding_config CesTool#grounding_config}

---

##### `rewriter_config`<sup>Optional</sup> <a name="rewriter_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.rewriterConfig"></a>

```python
rewriter_config: CesToolDataStoreToolModalityConfigsRewriterConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

rewriter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#rewriter_config CesTool#rewriter_config}

---

##### `summarization_config`<sup>Optional</sup> <a name="summarization_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.summarizationConfig"></a>

```python
summarization_config: CesToolDataStoreToolModalityConfigsSummarizationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#summarization_config CesTool#summarization_config}

---

### CesToolDataStoreToolModalityConfigsGroundingConfig <a name="CesToolDataStoreToolModalityConfigsGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig(
  disabled: bool | IResolvable = None,
  grounding_level: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether grounding is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel">grounding_level</a></code> | <code>typing.Union[int, float]</code> | The groundedness threshold of the answer based on the retrieved sources. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether grounding is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `grounding_level`<sup>Optional</sup> <a name="grounding_level" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel"></a>

```python
grounding_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The groundedness threshold of the answer based on the retrieved sources.

The value has a configurable range of [1, 5]. The level is used to
threshold the groundedness of the answer, meaning that all responses with
a groundedness score below the threshold will fall back to returning
relevant snippets only.
For example, a level of 3 means that the groundedness score must be
3 or higher for the response to be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#grounding_level CesTool#grounding_level}

---

### CesToolDataStoreToolModalityConfigsRewriterConfig <a name="CesToolDataStoreToolModalityConfigsRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig(
  model_settings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings,
  disabled: bool | IResolvable = None,
  prompt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rewriter is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt">prompt</a></code> | <code>str</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings"></a>

```python
model_settings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rewriter is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

### CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings <a name="CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model CesTool#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

### CesToolDataStoreToolModalityConfigsSummarizationConfig <a name="CesToolDataStoreToolModalityConfigsSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig(
  disabled: bool | IResolvable = None,
  model_settings: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings = None,
  prompt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether summarization is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt">prompt</a></code> | <code>str</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether summarization is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings"></a>

```python
model_settings: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

### CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model CesTool#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

### CesToolGoogleSearchTool <a name="CesToolGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolGoogleSearchTool(
  name: str,
  context_urls: typing.List[str] = None,
  description: str = None,
  exclude_domains: typing.List[str] = None,
  preferred_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.name">name</a></code> | <code>str</code> | The name of the tool. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.contextUrls">context_urls</a></code> | <code>typing.List[str]</code> | Content will be fetched directly from these URLs for context and grounding. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.description">description</a></code> | <code>str</code> | Description of the tool's purpose. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.excludeDomains">exclude_domains</a></code> | <code>typing.List[str]</code> | List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.preferredDomains">preferred_domains</a></code> | <code>typing.List[str]</code> | Specifies domain names to guide the search. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `context_urls`<sup>Optional</sup> <a name="context_urls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.contextUrls"></a>

```python
context_urls: typing.List[str]
```

- *Type:* typing.List[str]

Content will be fetched directly from these URLs for context and grounding.

More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#context_urls CesTool#context_urls}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the tool's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `exclude_domains`<sup>Optional</sup> <a name="exclude_domains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.excludeDomains"></a>

```python
exclude_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#exclude_domains CesTool#exclude_domains}

---

##### `preferred_domains`<sup>Optional</sup> <a name="preferred_domains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.preferredDomains"></a>

```python
preferred_domains: typing.List[str]
```

- *Type:* typing.List[str]

Specifies domain names to guide the search.

The model will be instructed to prioritize these domains
when formulating queries for google search.
This is a best-effort hint and these domains may or may
not be exclusively reflected in the final search results.
Example: "example.com", "another.site".
A maximum of 20 domains can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#preferred_domains CesTool#preferred_domains}

---

### CesToolOpenApiTool <a name="CesToolOpenApiTool" id="@cdktn/provider-google.cesTool.CesToolOpenApiTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiTool.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiTool()
```


### CesToolOpenApiToolApiAuthentication <a name="CesToolOpenApiToolApiAuthentication" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthentication()
```


### CesToolOpenApiToolApiAuthenticationApiKeyConfig <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig()
```


### CesToolOpenApiToolApiAuthenticationBearerTokenConfig <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig()
```


### CesToolOpenApiToolApiAuthenticationOauthConfig <a name="CesToolOpenApiToolApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig()
```


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig()
```


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig()
```


### CesToolOpenApiToolServiceDirectoryConfig <a name="CesToolOpenApiToolServiceDirectoryConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolServiceDirectoryConfig()
```


### CesToolOpenApiToolTlsConfig <a name="CesToolOpenApiToolTlsConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolTlsConfig()
```


### CesToolOpenApiToolTlsConfigCaCerts <a name="CesToolOpenApiToolTlsConfigCaCerts" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolTlsConfigCaCerts()
```


### CesToolPythonFunction <a name="CesToolPythonFunction" id="@cdktn/provider-google.cesTool.CesToolPythonFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolPythonFunction(
  name: str = None,
  python_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction.property.name">name</a></code> | <code>str</code> | The name of the Python function to execute. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction.property.pythonCode">python_code</a></code> | <code>str</code> | The Python code to execute for the tool. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Python function to execute.

Must match a Python function
name defined in the python code. Case sensitive. If the name is not
provided, the first function defined in the python code will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `python_code`<sup>Optional</sup> <a name="python_code" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The Python code to execute for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#python_code CesTool#python_code}

---

### CesToolSystemTool <a name="CesToolSystemTool" id="@cdktn/provider-google.cesTool.CesToolSystemTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolSystemTool.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolSystemTool()
```


### CesToolTimeouts <a name="CesToolTimeouts" id="@cdktn/provider-google.cesTool.CesToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#create CesTool#create}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#delete CesTool#delete}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#update CesTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#create CesTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#delete CesTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#update CesTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesToolClientFunctionOutputReference <a name="CesToolClientFunctionOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolClientFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse">put_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters"></a>

```python
def put_parameters(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.type"></a>

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#type CesTool#type}

---

###### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.additionalProperties"></a>

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.anyOf"></a>

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.default"></a>

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#default CesTool#default}

---

###### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.defs"></a>

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#defs CesTool#defs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.description"></a>

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.enum"></a>

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#enum CesTool#enum}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.items"></a>

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#items CesTool#items}

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.maximum"></a>

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

###### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.minimum"></a>

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

###### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.minItems"></a>

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

###### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.nullable"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

###### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.prefixItems"></a>

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.properties"></a>

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#properties CesTool#properties}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.ref"></a>

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#ref CesTool#ref}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.required"></a>

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#required CesTool#required}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.title"></a>

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#title CesTool#title}

---

###### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.uniqueItems"></a>

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

##### `put_response` <a name="put_response" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse"></a>

```python
def put_response(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.type"></a>

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#type CesTool#type}

---

###### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.additionalProperties"></a>

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.anyOf"></a>

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.default"></a>

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#default CesTool#default}

---

###### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.defs"></a>

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#defs CesTool#defs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.description"></a>

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.enum"></a>

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#enum CesTool#enum}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.items"></a>

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#items CesTool#items}

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.maximum"></a>

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

###### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.minimum"></a>

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

###### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.minItems"></a>

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

###### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.nullable"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

###### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.prefixItems"></a>

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.properties"></a>

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#properties CesTool#properties}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.ref"></a>

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#ref CesTool#ref}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.required"></a>

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#required CesTool#required}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.title"></a>

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#title CesTool#title}

---

###### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.uniqueItems"></a>

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference">CesToolClientFunctionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference">CesToolClientFunctionResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parametersInput">parameters_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.responseInput">response_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parameters"></a>

```python
parameters: CesToolClientFunctionParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference">CesToolClientFunctionParametersOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.response"></a>

```python
response: CesToolClientFunctionResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference">CesToolClientFunctionResponseOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parametersInput"></a>

```python
parameters_input: CesToolClientFunctionParameters
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.responseInput"></a>

```python
response_input: CesToolClientFunctionResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.internalValue"></a>

```python
internal_value: CesToolClientFunction
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---


### CesToolClientFunctionParametersOutputReference <a name="CesToolClientFunctionParametersOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolClientFunctionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefs">reset_defs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinItems">reset_min_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetPrefixItems">reset_prefix_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetUniqueItems">reset_unique_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_defs` <a name="reset_defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefs"></a>

```python
def reset_defs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_items` <a name="reset_min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinItems"></a>

```python
def reset_min_items() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_prefix_items` <a name="reset_prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetPrefixItems"></a>

```python
def reset_prefix_items() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_unique_items` <a name="reset_unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetUniqueItems"></a>

```python
def reset_unique_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOfInput">any_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defsInput">defs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.itemsInput">items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItemsInput">min_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullableInput">nullable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItemsInput">prefix_items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.requiredInput">required_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItemsInput">unique_items_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalProperties">additional_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOf">any_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defs">defs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.items">items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItems">prefix_items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.required">required</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOfInput"></a>

```python
any_of_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `defs_input`<sup>Optional</sup> <a name="defs_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defsInput"></a>

```python
defs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.itemsInput"></a>

```python
items_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items_input`<sup>Optional</sup> <a name="min_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItemsInput"></a>

```python
min_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullableInput"></a>

```python
nullable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items_input`<sup>Optional</sup> <a name="prefix_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItemsInput"></a>

```python
prefix_items_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.requiredInput"></a>

```python
required_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_items_input`<sup>Optional</sup> <a name="unique_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItemsInput"></a>

```python
unique_items_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defs"></a>

```python
defs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.items"></a>

```python
items: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items`<sup>Required</sup> <a name="min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items`<sup>Required</sup> <a name="prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_items`<sup>Required</sup> <a name="unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.internalValue"></a>

```python
internal_value: CesToolClientFunctionParameters
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---


### CesToolClientFunctionResponseOutputReference <a name="CesToolClientFunctionResponseOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolClientFunctionResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefs">reset_defs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinItems">reset_min_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetPrefixItems">reset_prefix_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetUniqueItems">reset_unique_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_defs` <a name="reset_defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefs"></a>

```python
def reset_defs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_items` <a name="reset_min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinItems"></a>

```python
def reset_min_items() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_prefix_items` <a name="reset_prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetPrefixItems"></a>

```python
def reset_prefix_items() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_unique_items` <a name="reset_unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetUniqueItems"></a>

```python
def reset_unique_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOfInput">any_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defsInput">defs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.itemsInput">items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItemsInput">min_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullableInput">nullable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItemsInput">prefix_items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.requiredInput">required_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItemsInput">unique_items_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalProperties">additional_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOf">any_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defs">defs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.items">items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItems">prefix_items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.required">required</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOfInput"></a>

```python
any_of_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `defs_input`<sup>Optional</sup> <a name="defs_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defsInput"></a>

```python
defs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.itemsInput"></a>

```python
items_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items_input`<sup>Optional</sup> <a name="min_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItemsInput"></a>

```python
min_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullableInput"></a>

```python
nullable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items_input`<sup>Optional</sup> <a name="prefix_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItemsInput"></a>

```python
prefix_items_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.requiredInput"></a>

```python
required_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_items_input`<sup>Optional</sup> <a name="unique_items_input" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItemsInput"></a>

```python
unique_items_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defs"></a>

```python
defs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.items"></a>

```python
items: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items`<sup>Required</sup> <a name="min_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items`<sup>Required</sup> <a name="prefix_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_items`<sup>Required</sup> <a name="unique_items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.internalValue"></a>

```python
internal_value: CesToolClientFunctionResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---


### CesToolDataStoreToolBoostSpecsList <a name="CesToolDataStoreToolBoostSpecsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolBoostSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]

---


### CesToolDataStoreToolBoostSpecsOutputReference <a name="CesToolDataStoreToolBoostSpecsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec">put_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spec` <a name="put_spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec"></a>

```python
def put_spec(
  value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpec]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList">CesToolDataStoreToolBoostSpecsSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput">data_stores_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStores">data_stores</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.spec"></a>

```python
spec: CesToolDataStoreToolBoostSpecsSpecList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList">CesToolDataStoreToolBoostSpecsSpecList</a>

---

##### `data_stores_input`<sup>Optional</sup> <a name="data_stores_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput"></a>

```python
data_stores_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.specInput"></a>

```python
spec_input: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]

---

##### `data_stores`<sup>Required</sup> <a name="data_stores" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStores"></a>

```python
data_stores: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolDataStoreToolBoostSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount">reset_boost_amount</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_boost_amount` <a name="reset_boost_amount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount"></a>

```python
def reset_boost_amount() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput">boost_amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount">boost_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `boost_amount_input`<sup>Optional</sup> <a name="boost_amount_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput"></a>

```python
boost_amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `boost_amount`<sup>Required</sup> <a name="boost_amount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount"></a>

```python
boost_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints">put_control_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType">reset_attribute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints">reset_control_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType">reset_interpolation_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_control_points` <a name="put_control_points" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints"></a>

```python
def put_control_points(
  value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

---

##### `reset_attribute_type` <a name="reset_attribute_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType"></a>

```python
def reset_attribute_type() -> None
```

##### `reset_control_points` <a name="reset_control_points" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints"></a>

```python
def reset_control_points() -> None
```

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_interpolation_type` <a name="reset_interpolation_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType"></a>

```python
def reset_interpolation_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints">control_points</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput">attribute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput">control_points_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput">interpolation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType">attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType">interpolation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `control_points`<sup>Required</sup> <a name="control_points" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints"></a>

```python
control_points: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a>

---

##### `attribute_type_input`<sup>Optional</sup> <a name="attribute_type_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput"></a>

```python
attribute_type_input: str
```

- *Type:* str

---

##### `control_points_input`<sup>Optional</sup> <a name="control_points_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput"></a>

```python
control_points_input: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `interpolation_type_input`<sup>Optional</sup> <a name="interpolation_type_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput"></a>

```python
interpolation_type_input: str
```

- *Type:* str

---

##### `attribute_type`<sup>Required</sup> <a name="attribute_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `interpolation_type`<sup>Required</sup> <a name="interpolation_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType"></a>

```python
interpolation_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec">put_boost_control_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost">reset_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec">reset_boost_control_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boost_control_spec` <a name="put_boost_control_spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec"></a>

```python
def put_boost_control_spec(
  attribute_type: str = None,
  control_points: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints] = None,
  field_name: str = None,
  interpolation_type: str = None
) -> None
```

###### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.attributeType"></a>

- *Type:* str

The attribute type to be used to determine the boost amount.

The
attribute value can be derived from the field value of the specified
field_name. In the case of numerical it is straightforward i.e.
attribute_value = numerical_field_value. In the case of freshness
however, attribute_value = (time.now() - datetime_field_value).
Possible values:
NUMERICAL
FRESHNESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#attribute_type CesTool#attribute_type}

---

###### `control_points`<sup>Optional</sup> <a name="control_points" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.controlPoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

control_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#control_points CesTool#control_points}

---

###### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.fieldName"></a>

- *Type:* str

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#field_name CesTool#field_name}

---

###### `interpolation_type`<sup>Optional</sup> <a name="interpolation_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.interpolationType"></a>

- *Type:* str

The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#interpolation_type CesTool#interpolation_type}

---

##### `reset_boost` <a name="reset_boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost"></a>

```python
def reset_boost() -> None
```

##### `reset_boost_control_spec` <a name="reset_boost_control_spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec"></a>

```python
def reset_boost_control_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec">boost_control_spec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput">boost_control_spec_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput">boost_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost">boost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boost_control_spec`<sup>Required</sup> <a name="boost_control_spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec"></a>

```python
boost_control_spec: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a>

---

##### `boost_control_spec_input`<sup>Optional</sup> <a name="boost_control_spec_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput"></a>

```python
boost_control_spec_input: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---

##### `boost_input`<sup>Optional</sup> <a name="boost_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput"></a>

```python
boost_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `boost`<sup>Required</sup> <a name="boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost"></a>

```python
boost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>

---


### CesToolDataStoreToolBoostSpecsSpecList <a name="CesToolDataStoreToolBoostSpecsSpecList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolBoostSpecsSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>]

---


### CesToolDataStoreToolBoostSpecsSpecOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs">put_condition_boost_specs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_boost_specs` <a name="put_condition_boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs"></a>

```python
def put_condition_boost_specs(
  value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs">condition_boost_specs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput">condition_boost_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_boost_specs`<sup>Required</sup> <a name="condition_boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs"></a>

```python
condition_boost_specs: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a>

---

##### `condition_boost_specs_input`<sup>Optional</sup> <a name="condition_boost_specs_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput"></a>

```python
condition_boost_specs_input: IResolvable | typing.List[CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolDataStoreToolBoostSpecsSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection">collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection"></a>

```python
collection: str
```

- *Type:* str

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName"></a>

```python
collection_display_name: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig">connector_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode">document_processing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_config`<sup>Required</sup> <a name="connector_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig"></a>

```python
connector_config: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `document_processing_mode`<sup>Required</sup> <a name="document_processing_mode" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode"></a>

```python
document_processing_mode: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesList <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolDataStoreToolEngineSourceDataStoreSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore">put_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore">reset_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store` <a name="put_data_store" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore"></a>

```python
def put_data_store(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore.parameter.name"></a>

- *Type:* str

Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `reset_data_store` <a name="reset_data_store" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore"></a>

```python
def reset_data_store() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput">data_store_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore"></a>

```python
data_store: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a>

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput"></a>

```python
data_store_input: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolDataStoreToolEngineSourceDataStoreSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>

---


### CesToolDataStoreToolEngineSourceOutputReference <a name="CesToolDataStoreToolEngineSourceOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolEngineSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources">put_data_store_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources">reset_data_store_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store_sources` <a name="put_data_store_sources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources"></a>

```python
def put_data_store_sources(
  value: IResolvable | typing.List[CesToolDataStoreToolEngineSourceDataStoreSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]

---

##### `reset_data_store_sources` <a name="reset_data_store_sources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources"></a>

```python
def reset_data_store_sources() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources">data_store_sources</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList">CesToolDataStoreToolEngineSourceDataStoreSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput">data_store_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_sources`<sup>Required</sup> <a name="data_store_sources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources"></a>

```python
data_store_sources: CesToolDataStoreToolEngineSourceDataStoreSourcesList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList">CesToolDataStoreToolEngineSourceDataStoreSourcesList</a>

---

##### `data_store_sources_input`<sup>Optional</sup> <a name="data_store_sources_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput"></a>

```python
data_store_sources_input: IResolvable | typing.List[CesToolDataStoreToolEngineSourceDataStoreSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolEngineSource
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---


### CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel">reset_grounding_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_grounding_level` <a name="reset_grounding_level" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel"></a>

```python
def reset_grounding_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput">grounding_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel">grounding_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `grounding_level_input`<sup>Optional</sup> <a name="grounding_level_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput"></a>

```python
grounding_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `grounding_level`<sup>Required</sup> <a name="grounding_level" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel"></a>

```python
grounding_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolModalityConfigsGroundingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---


### CesToolDataStoreToolModalityConfigsList <a name="CesToolDataStoreToolModalityConfigsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolDataStoreToolModalityConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesToolDataStoreToolModalityConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]

---


### CesToolDataStoreToolModalityConfigsOutputReference <a name="CesToolDataStoreToolModalityConfigsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig">put_grounding_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig">put_rewriter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig">put_summarization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig">reset_grounding_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig">reset_rewriter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig">reset_summarization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grounding_config` <a name="put_grounding_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig"></a>

```python
def put_grounding_config(
  disabled: bool | IResolvable = None,
  grounding_level: typing.Union[int, float] = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether grounding is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

###### `grounding_level`<sup>Optional</sup> <a name="grounding_level" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig.parameter.groundingLevel"></a>

- *Type:* typing.Union[int, float]

The groundedness threshold of the answer based on the retrieved sources.

The value has a configurable range of [1, 5]. The level is used to
threshold the groundedness of the answer, meaning that all responses with
a groundedness score below the threshold will fall back to returning
relevant snippets only.
For example, a level of 3 means that the groundedness score must be
3 or higher for the response to be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#grounding_level CesTool#grounding_level}

---

##### `put_rewriter_config` <a name="put_rewriter_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig"></a>

```python
def put_rewriter_config(
  model_settings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings,
  disabled: bool | IResolvable = None,
  prompt: str = None
) -> None
```

###### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rewriter is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

###### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.prompt"></a>

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

##### `put_summarization_config` <a name="put_summarization_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig"></a>

```python
def put_summarization_config(
  disabled: bool | IResolvable = None,
  model_settings: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings = None,
  prompt: str = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether summarization is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

###### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

###### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.prompt"></a>

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

##### `reset_grounding_config` <a name="reset_grounding_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig"></a>

```python
def reset_grounding_config() -> None
```

##### `reset_rewriter_config` <a name="reset_rewriter_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig"></a>

```python
def reset_rewriter_config() -> None
```

##### `reset_summarization_config` <a name="reset_summarization_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig"></a>

```python
def reset_summarization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig">grounding_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig">rewriter_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput">grounding_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput">modality_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput">rewriter_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput">summarization_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityType">modality_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grounding_config`<sup>Required</sup> <a name="grounding_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig"></a>

```python
grounding_config: CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a>

---

##### `rewriter_config`<sup>Required</sup> <a name="rewriter_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig"></a>

```python
rewriter_config: CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a>

---

##### `summarization_config`<sup>Required</sup> <a name="summarization_config" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig"></a>

```python
summarization_config: CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a>

---

##### `grounding_config_input`<sup>Optional</sup> <a name="grounding_config_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput"></a>

```python
grounding_config_input: CesToolDataStoreToolModalityConfigsGroundingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---

##### `modality_type_input`<sup>Optional</sup> <a name="modality_type_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput"></a>

```python
modality_type_input: str
```

- *Type:* str

---

##### `rewriter_config_input`<sup>Optional</sup> <a name="rewriter_config_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput"></a>

```python
rewriter_config_input: CesToolDataStoreToolModalityConfigsRewriterConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---

##### `summarization_config_input`<sup>Optional</sup> <a name="summarization_config_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput"></a>

```python
summarization_config_input: CesToolDataStoreToolModalityConfigsSummarizationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---

##### `modality_type`<sup>Required</sup> <a name="modality_type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityType"></a>

```python
modality_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolDataStoreToolModalityConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>

---


### CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference <a name="CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---


### CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt">reset_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model CesTool#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_prompt` <a name="reset_prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt"></a>

```python
def reset_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings"></a>

```python
model_settings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolModalityConfigsRewriterConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---


### CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---


### CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings">reset_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt">reset_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model CesTool#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```

##### `reset_prompt` <a name="reset_prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt"></a>

```python
def reset_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings"></a>

```python
model_settings: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreToolModalityConfigsSummarizationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---


### CesToolDataStoreToolOutputReference <a name="CesToolDataStoreToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolDataStoreToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs">put_boost_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource">put_engine_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs">put_modality_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetBoostSpecs">reset_boost_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetEngineSource">reset_engine_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetMaxResults">reset_max_results</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetModalityConfigs">reset_modality_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boost_specs` <a name="put_boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs"></a>

```python
def put_boost_specs(
  value: IResolvable | typing.List[CesToolDataStoreToolBoostSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]

---

##### `put_engine_source` <a name="put_engine_source" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource"></a>

```python
def put_engine_source(
  engine: str,
  data_store_sources: IResolvable | typing.List[CesToolDataStoreToolEngineSourceDataStoreSources] = None,
  filter: str = None
) -> None
```

###### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource.parameter.engine"></a>

- *Type:* str

Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#engine CesTool#engine}

---

###### `data_store_sources`<sup>Optional</sup> <a name="data_store_sources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource.parameter.dataStoreSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>]

data_store_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store_sources CesTool#data_store_sources}

---

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource.parameter.filter"></a>

- *Type:* str

A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#filter CesTool#filter}

---

##### `put_modality_configs` <a name="put_modality_configs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs"></a>

```python
def put_modality_configs(
  value: IResolvable | typing.List[CesToolDataStoreToolModalityConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]

---

##### `reset_boost_specs` <a name="reset_boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetBoostSpecs"></a>

```python
def reset_boost_specs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine_source` <a name="reset_engine_source" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetEngineSource"></a>

```python
def reset_engine_source() -> None
```

##### `reset_max_results` <a name="reset_max_results" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetMaxResults"></a>

```python
def reset_max_results() -> None
```

##### `reset_modality_configs` <a name="reset_modality_configs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetModalityConfigs"></a>

```python
def reset_modality_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecs">boost_specs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList">CesToolDataStoreToolBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSource">engine_source</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference">CesToolDataStoreToolEngineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigs">modality_configs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList">CesToolDataStoreToolModalityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecsInput">boost_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSourceInput">engine_source_input</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResultsInput">max_results_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigsInput">modality_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boost_specs`<sup>Required</sup> <a name="boost_specs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecs"></a>

```python
boost_specs: CesToolDataStoreToolBoostSpecsList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList">CesToolDataStoreToolBoostSpecsList</a>

---

##### `engine_source`<sup>Required</sup> <a name="engine_source" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSource"></a>

```python
engine_source: CesToolDataStoreToolEngineSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference">CesToolDataStoreToolEngineSourceOutputReference</a>

---

##### `modality_configs`<sup>Required</sup> <a name="modality_configs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigs"></a>

```python
modality_configs: CesToolDataStoreToolModalityConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList">CesToolDataStoreToolModalityConfigsList</a>

---

##### `boost_specs_input`<sup>Optional</sup> <a name="boost_specs_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecsInput"></a>

```python
boost_specs_input: IResolvable | typing.List[CesToolDataStoreToolBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_source_input`<sup>Optional</sup> <a name="engine_source_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSourceInput"></a>

```python
engine_source_input: CesToolDataStoreToolEngineSource
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---

##### `max_results_input`<sup>Optional</sup> <a name="max_results_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResultsInput"></a>

```python
max_results_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modality_configs_input`<sup>Optional</sup> <a name="modality_configs_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigsInput"></a>

```python
modality_configs_input: IResolvable | typing.List[CesToolDataStoreToolModalityConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `max_results`<sup>Required</sup> <a name="max_results" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.internalValue"></a>

```python
internal_value: CesToolDataStoreTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---


### CesToolGoogleSearchToolOutputReference <a name="CesToolGoogleSearchToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolGoogleSearchToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetContextUrls">reset_context_urls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetExcludeDomains">reset_exclude_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetPreferredDomains">reset_preferred_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context_urls` <a name="reset_context_urls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetContextUrls"></a>

```python
def reset_context_urls() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_domains` <a name="reset_exclude_domains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetExcludeDomains"></a>

```python
def reset_exclude_domains() -> None
```

##### `reset_preferred_domains` <a name="reset_preferred_domains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetPreferredDomains"></a>

```python
def reset_preferred_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrlsInput">context_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomainsInput">exclude_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomainsInput">preferred_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrls">context_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomains">exclude_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomains">preferred_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_urls_input`<sup>Optional</sup> <a name="context_urls_input" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrlsInput"></a>

```python
context_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_domains_input`<sup>Optional</sup> <a name="exclude_domains_input" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomainsInput"></a>

```python
exclude_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preferred_domains_input`<sup>Optional</sup> <a name="preferred_domains_input" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomainsInput"></a>

```python
preferred_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `context_urls`<sup>Required</sup> <a name="context_urls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrls"></a>

```python
context_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude_domains`<sup>Required</sup> <a name="exclude_domains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomains"></a>

```python
exclude_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preferred_domains`<sup>Required</sup> <a name="preferred_domains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomains"></a>

```python
preferred_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.internalValue"></a>

```python
internal_value: CesToolGoogleSearchTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---


### CesToolOpenApiToolApiAuthenticationApiKeyConfigList <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig">CesToolOpenApiToolApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig">CesToolOpenApiToolApiAuthenticationApiKeyConfig</a>

---


### CesToolOpenApiToolApiAuthenticationBearerTokenConfigList <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig">CesToolOpenApiToolApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig">CesToolOpenApiToolApiAuthenticationBearerTokenConfig</a>

---


### CesToolOpenApiToolApiAuthenticationList <a name="CesToolOpenApiToolApiAuthenticationList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolApiAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolApiAuthenticationOauthConfigList <a name="CesToolOpenApiToolApiAuthenticationOauthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig">CesToolOpenApiToolApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig">CesToolOpenApiToolApiAuthenticationOauthConfig</a>

---


### CesToolOpenApiToolApiAuthenticationOutputReference <a name="CesToolOpenApiToolApiAuthenticationOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList">CesToolOpenApiToolApiAuthenticationApiKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList">CesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList">CesToolOpenApiToolApiAuthenticationOauthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication">CesToolOpenApiToolApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: CesToolOpenApiToolApiAuthenticationApiKeyConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList">CesToolOpenApiToolApiAuthenticationApiKeyConfigList</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: CesToolOpenApiToolApiAuthenticationBearerTokenConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList">CesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: CesToolOpenApiToolApiAuthenticationOauthConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList">CesToolOpenApiToolApiAuthenticationOauthConfigList</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a>

---

##### `service_agent_id_token_auth_config`<sup>Required</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication">CesToolOpenApiToolApiAuthentication</a>

---


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolOpenApiToolList <a name="CesToolOpenApiToolList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolOutputReference <a name="CesToolOpenApiToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList">CesToolOpenApiToolApiAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.ignoreUnknownFields">ignore_unknown_fields</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.openApiSchema">open_api_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList">CesToolOpenApiToolServiceDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList">CesToolOpenApiToolTlsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiTool">CesToolOpenApiTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.apiAuthentication"></a>

```python
api_authentication: CesToolOpenApiToolApiAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList">CesToolOpenApiToolApiAuthenticationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ignore_unknown_fields`<sup>Required</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.ignoreUnknownFields"></a>

```python
ignore_unknown_fields: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.openApiSchema"></a>

```python
open_api_schema: str
```

- *Type:* str

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: CesToolOpenApiToolServiceDirectoryConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList">CesToolOpenApiToolServiceDirectoryConfigList</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.tlsConfig"></a>

```python
tls_config: CesToolOpenApiToolTlsConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList">CesToolOpenApiToolTlsConfigList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiTool">CesToolOpenApiTool</a>

---


### CesToolOpenApiToolServiceDirectoryConfigList <a name="CesToolOpenApiToolServiceDirectoryConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolServiceDirectoryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolServiceDirectoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolServiceDirectoryConfigOutputReference <a name="CesToolOpenApiToolServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig">CesToolOpenApiToolServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig">CesToolOpenApiToolServiceDirectoryConfig</a>

---


### CesToolOpenApiToolTlsConfigCaCertsList <a name="CesToolOpenApiToolTlsConfigCaCertsList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolTlsConfigCaCertsOutputReference <a name="CesToolOpenApiToolTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts">CesToolOpenApiToolTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolTlsConfigCaCerts
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts">CesToolOpenApiToolTlsConfigCaCerts</a>

---


### CesToolOpenApiToolTlsConfigList <a name="CesToolOpenApiToolTlsConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolOpenApiToolTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolOpenApiToolTlsConfigOutputReference <a name="CesToolOpenApiToolTlsConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolOpenApiToolTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList">CesToolOpenApiToolTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig">CesToolOpenApiToolTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: CesToolOpenApiToolTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList">CesToolOpenApiToolTlsConfigCaCertsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesToolOpenApiToolTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig">CesToolOpenApiToolTlsConfig</a>

---


### CesToolPythonFunctionOutputReference <a name="CesToolPythonFunctionOutputReference" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolPythonFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetPythonCode">reset_python_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_python_code` <a name="reset_python_code" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetPythonCode"></a>

```python
def reset_python_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.internalValue"></a>

```python
internal_value: CesToolPythonFunction
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---


### CesToolSystemToolList <a name="CesToolSystemToolList" id="@cdktn/provider-google.cesTool.CesToolSystemToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolSystemToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesToolSystemToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesToolSystemToolOutputReference <a name="CesToolSystemToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolSystemToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemTool">CesToolSystemTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.internalValue"></a>

```python
internal_value: CesToolSystemTool
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolSystemTool">CesToolSystemTool</a>

---


### CesToolTimeoutsOutputReference <a name="CesToolTimeoutsOutputReference" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_tool

cesTool.CesToolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---




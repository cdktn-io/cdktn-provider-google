# `dataflowConfigStoreSetting` Submodule <a name="`dataflowConfigStoreSetting` Submodule" id="@cdktn/provider-google.dataflowConfigStoreSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowConfigStoreSetting <a name="DataflowConfigStoreSetting" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting google_dataflow_config_store_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config_store_setting_id: str,
  location: str,
  parent: str,
  value: DataflowConfigStoreSettingValue,
  deletion_policy: str = None,
  id: str = None,
  timeouts: DataflowConfigStoreSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.configStoreSettingId">config_store_setting_id</a></code> | <code>str</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.location">location</a></code> | <code>str</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.value">value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_store_setting_id`<sup>Required</sup> <a name="config_store_setting_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.configStoreSettingId"></a>

- *Type:* str

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#config_store_setting_id DataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.location"></a>

- *Type:* str

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#location DataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#parent DataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#value DataflowConfigStoreSetting#value}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#deletion_policy DataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#timeouts DataflowConfigStoreSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}.

---

##### `put_value` <a name="put_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue"></a>

```python
def put_value(
  bool_value: bool | IResolvable = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#bool_value DataflowConfigStoreSetting#bool_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.putValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#string_value DataflowConfigStoreSetting#string_value}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowConfigStoreSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowConfigStoreSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataflowConfigStoreSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference">DataflowConfigStoreSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.value">value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference">DataflowConfigStoreSettingValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingIdInput">config_store_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.valueInput">value_input</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingId">config_store_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeouts"></a>

```python
timeouts: DataflowConfigStoreSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference">DataflowConfigStoreSettingTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.value"></a>

```python
value: DataflowConfigStoreSettingValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference">DataflowConfigStoreSettingValueOutputReference</a>

---

##### `config_store_setting_id_input`<sup>Optional</sup> <a name="config_store_setting_id_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingIdInput"></a>

```python
config_store_setting_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataflowConfigStoreSettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.valueInput"></a>

```python
value_input: DataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---

##### `config_store_setting_id`<sup>Required</sup> <a name="config_store_setting_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.configStoreSettingId"></a>

```python
config_store_setting_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowConfigStoreSettingConfig <a name="DataflowConfigStoreSettingConfig" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.Initializer"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config_store_setting_id: str,
  location: str,
  parent: str,
  value: DataflowConfigStoreSettingValue,
  deletion_policy: str = None,
  id: str = None,
  timeouts: DataflowConfigStoreSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.configStoreSettingId">config_store_setting_id</a></code> | <code>str</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.location">location</a></code> | <code>str</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.value">value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_store_setting_id`<sup>Required</sup> <a name="config_store_setting_id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.configStoreSettingId"></a>

```python
config_store_setting_id: str
```

- *Type:* str

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#config_store_setting_id DataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#location DataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#parent DataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.value"></a>

```python
value: DataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#value DataflowConfigStoreSetting#value}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#deletion_policy DataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#id DataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingConfig.property.timeouts"></a>

```python
timeouts: DataflowConfigStoreSettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#timeouts DataflowConfigStoreSetting#timeouts}

---

### DataflowConfigStoreSettingTimeouts <a name="DataflowConfigStoreSettingTimeouts" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#create DataflowConfigStoreSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#delete DataflowConfigStoreSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#update DataflowConfigStoreSetting#update}.

---

### DataflowConfigStoreSettingValue <a name="DataflowConfigStoreSettingValue" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.Initializer"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSettingValue(
  bool_value: bool | IResolvable = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#bool_value DataflowConfigStoreSetting#bool_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataflow_config_store_setting#string_value DataflowConfigStoreSetting#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowConfigStoreSettingTimeoutsOutputReference <a name="DataflowConfigStoreSettingTimeoutsOutputReference" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataflowConfigStoreSettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingTimeouts">DataflowConfigStoreSettingTimeouts</a>

---


### DataflowConfigStoreSettingValueOutputReference <a name="DataflowConfigStoreSettingValueOutputReference" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataflow_config_store_setting

dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValueOutputReference.property.internalValue"></a>

```python
internal_value: DataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google.dataflowConfigStoreSetting.DataflowConfigStoreSettingValue">DataflowConfigStoreSettingValue</a>

---




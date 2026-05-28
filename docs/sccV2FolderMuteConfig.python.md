# `sccV2FolderMuteConfig` Submodule <a name="`sccV2FolderMuteConfig` Submodule" id="@cdktn/provider-google.sccV2FolderMuteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2FolderMuteConfig <a name="SccV2FolderMuteConfig" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config google_scc_v2_folder_mute_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str,
  folder: str,
  mute_config_id: str,
  type: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccV2FolderMuteConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.filter">filter</a></code> | <code>str</code> | An expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder whose Cloud Security Command Center the Mute Config lives in. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.muteConfigId">mute_config_id</a></code> | <code>str</code> | Unique identifier provided by the client within the parent scope. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | location Id is provided by folder. If not provided, Use global as default. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.filter"></a>

- *Type:* str

An expression that defines the filter to apply across create/update events of findings.

While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#filter SccV2FolderMuteConfig#filter}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.folder"></a>

- *Type:* str

The folder whose Cloud Security Command Center the Mute Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#folder SccV2FolderMuteConfig#folder}

---

##### `mute_config_id`<sup>Required</sup> <a name="mute_config_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.muteConfigId"></a>

- *Type:* str

Unique identifier provided by the client within the parent scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#mute_config_id SccV2FolderMuteConfig#mute_config_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.type"></a>

- *Type:* str

The type of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#type SccV2FolderMuteConfig#type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#deletion_policy SccV2FolderMuteConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.description"></a>

- *Type:* str

A description of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#description SccV2FolderMuteConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.location"></a>

- *Type:* str

location Id is provided by folder. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#location SccV2FolderMuteConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#timeouts SccV2FolderMuteConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SccV2FolderMuteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SccV2FolderMuteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccV2FolderMuteConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccV2FolderMuteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SccV2FolderMuteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.mostRecentEditor">most_recent_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference">SccV2FolderMuteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigIdInput">mute_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigId">mute_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `most_recent_editor`<sup>Required</sup> <a name="most_recent_editor" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.mostRecentEditor"></a>

```python
most_recent_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeouts"></a>

```python
timeouts: SccV2FolderMuteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference">SccV2FolderMuteConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mute_config_id_input`<sup>Optional</sup> <a name="mute_config_id_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigIdInput"></a>

```python
mute_config_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SccV2FolderMuteConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mute_config_id`<sup>Required</sup> <a name="mute_config_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigId"></a>

```python
mute_config_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2FolderMuteConfigConfig <a name="SccV2FolderMuteConfigConfig" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str,
  folder: str,
  mute_config_id: str,
  type: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccV2FolderMuteConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.filter">filter</a></code> | <code>str</code> | An expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.folder">folder</a></code> | <code>str</code> | The folder whose Cloud Security Command Center the Mute Config lives in. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.muteConfigId">mute_config_id</a></code> | <code>str</code> | Unique identifier provided by the client within the parent scope. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.type">type</a></code> | <code>str</code> | The type of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.description">description</a></code> | <code>str</code> | A description of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.location">location</a></code> | <code>str</code> | location Id is provided by folder. If not provided, Use global as default. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

An expression that defines the filter to apply across create/update events of findings.

While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#filter SccV2FolderMuteConfig#filter}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder whose Cloud Security Command Center the Mute Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#folder SccV2FolderMuteConfig#folder}

---

##### `mute_config_id`<sup>Required</sup> <a name="mute_config_id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.muteConfigId"></a>

```python
mute_config_id: str
```

- *Type:* str

Unique identifier provided by the client within the parent scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#mute_config_id SccV2FolderMuteConfig#mute_config_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#type SccV2FolderMuteConfig#type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#deletion_policy SccV2FolderMuteConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#description SccV2FolderMuteConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

location Id is provided by folder. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#location SccV2FolderMuteConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.timeouts"></a>

```python
timeouts: SccV2FolderMuteConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#timeouts SccV2FolderMuteConfig#timeouts}

---

### SccV2FolderMuteConfigTimeouts <a name="SccV2FolderMuteConfigTimeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2FolderMuteConfigTimeoutsOutputReference <a name="SccV2FolderMuteConfigTimeoutsOutputReference" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import scc_v2_folder_mute_config

sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SccV2FolderMuteConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

---




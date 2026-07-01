# `discoveryEngineUserStore` Submodule <a name="`discoveryEngineUserStore` Submodule" id="@cdktn/provider-google.discoveryEngineUserStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineUserStore <a name="DiscoveryEngineUserStore" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store google_discovery_engine_user_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStore(
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
  default_license_config: str = None,
  enable_expired_license_auto_update: bool | IResolvable = None,
  enable_license_auto_register: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineUserStoreTimeouts = None,
  user_store_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.defaultLicenseConfig">default_license_config</a></code> | <code>str</code> | The resource name of the default license config assigned to users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableExpiredLicenseAutoUpdate">enable_expired_license_auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable automatic license update for users with expired licenses in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableLicenseAutoRegister">enable_license_auto_register</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable automatic license registration for new users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.userStoreId">user_store_id</a></code> | <code>str</code> | The ID of the user store. Currently only accepts "default_user_store". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}

---

##### `default_license_config`<sup>Optional</sup> <a name="default_license_config" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.defaultLicenseConfig"></a>

- *Type:* str

The resource name of the default license config assigned to users created in this user store.

Format:
'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
If 'enableLicenseAutoRegister' is true, new users will automatically
register under the default subscription.
If the default license config doesn't have remaining license seats left,
new users will not be assigned with license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}

---

##### `enable_expired_license_auto_update`<sup>Optional</sup> <a name="enable_expired_license_auto_update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableExpiredLicenseAutoUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable automatic license update for users with expired licenses in this user store.

If enabled, users with expired licenses will
automatically be updated to the default subscription if there are
remaining license seats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}

---

##### `enable_license_auto_register`<sup>Optional</sup> <a name="enable_license_auto_register" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.enableLicenseAutoRegister"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable automatic license registration for new users created in this user store.

If enabled, new users will automatically register under
the default subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}

---

##### `user_store_id`<sup>Optional</sup> <a name="user_store_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.userStoreId"></a>

- *Type:* str

The ID of the user store. Currently only accepts "default_user_store".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig">reset_default_license_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate">reset_enable_expired_license_auto_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister">reset_enable_license_auto_register</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId">reset_user_store_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}.

---

##### `reset_default_license_config` <a name="reset_default_license_config" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig"></a>

```python
def reset_default_license_config() -> None
```

##### `reset_enable_expired_license_auto_update` <a name="reset_enable_expired_license_auto_update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate"></a>

```python
def reset_enable_expired_license_auto_update() -> None
```

##### `reset_enable_license_auto_register` <a name="reset_enable_license_auto_register" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister"></a>

```python
def reset_enable_license_auto_register() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_store_id` <a name="reset_user_store_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId"></a>

```python
def reset_user_store_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineUserStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineUserStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineUserStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput">default_license_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput">enable_expired_license_auto_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput">enable_license_auto_register_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput">user_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig">default_license_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate">enable_expired_license_auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister">enable_license_auto_register</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId">user_store_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts"></a>

```python
timeouts: DiscoveryEngineUserStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a>

---

##### `default_license_config_input`<sup>Optional</sup> <a name="default_license_config_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput"></a>

```python
default_license_config_input: str
```

- *Type:* str

---

##### `enable_expired_license_auto_update_input`<sup>Optional</sup> <a name="enable_expired_license_auto_update_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput"></a>

```python
enable_expired_license_auto_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_license_auto_register_input`<sup>Optional</sup> <a name="enable_license_auto_register_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput"></a>

```python
enable_license_auto_register_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineUserStoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `user_store_id_input`<sup>Optional</sup> <a name="user_store_id_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput"></a>

```python
user_store_id_input: str
```

- *Type:* str

---

##### `default_license_config`<sup>Required</sup> <a name="default_license_config" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig"></a>

```python
default_license_config: str
```

- *Type:* str

---

##### `enable_expired_license_auto_update`<sup>Required</sup> <a name="enable_expired_license_auto_update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate"></a>

```python
enable_expired_license_auto_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_license_auto_register`<sup>Required</sup> <a name="enable_license_auto_register" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister"></a>

```python
enable_license_auto_register: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `user_store_id`<sup>Required</sup> <a name="user_store_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId"></a>

```python
user_store_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineUserStoreConfig <a name="DiscoveryEngineUserStoreConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  default_license_config: str = None,
  enable_expired_license_auto_update: bool | IResolvable = None,
  enable_license_auto_register: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineUserStoreTimeouts = None,
  user_store_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig">default_license_config</a></code> | <code>str</code> | The resource name of the default license config assigned to users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate">enable_expired_license_auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable automatic license update for users with expired licenses in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister">enable_license_auto_register</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable automatic license registration for new users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId">user_store_id</a></code> | <code>str</code> | The ID of the user store. Currently only accepts "default_user_store". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}

---

##### `default_license_config`<sup>Optional</sup> <a name="default_license_config" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig"></a>

```python
default_license_config: str
```

- *Type:* str

The resource name of the default license config assigned to users created in this user store.

Format:
'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
If 'enableLicenseAutoRegister' is true, new users will automatically
register under the default subscription.
If the default license config doesn't have remaining license seats left,
new users will not be assigned with license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}

---

##### `enable_expired_license_auto_update`<sup>Optional</sup> <a name="enable_expired_license_auto_update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate"></a>

```python
enable_expired_license_auto_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable automatic license update for users with expired licenses in this user store.

If enabled, users with expired licenses will
automatically be updated to the default subscription if there are
remaining license seats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}

---

##### `enable_license_auto_register`<sup>Optional</sup> <a name="enable_license_auto_register" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister"></a>

```python
enable_license_auto_register: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable automatic license registration for new users created in this user store.

If enabled, new users will automatically register under
the default subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineUserStoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}

---

##### `user_store_id`<sup>Optional</sup> <a name="user_store_id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId"></a>

```python
user_store_id: str
```

- *Type:* str

The ID of the user store. Currently only accepts "default_user_store".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}

---

### DiscoveryEngineUserStoreTimeouts <a name="DiscoveryEngineUserStoreTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineUserStoreTimeoutsOutputReference <a name="DiscoveryEngineUserStoreTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_user_store

discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineUserStoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---




# `storageFtpUser` Submodule <a name="`storageFtpUser` Submodule" id="@cdktn/provider-google.storageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpUser <a name="StorageFtpUser" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer_service_account: str,
  location: str,
  server_id: str,
  user_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  storage_directory_mappings: IResolvable | typing.List[StorageFtpUserStorageDirectoryMappings] = None,
  timeouts: StorageFtpUserTimeouts = None,
  user_credentials: IResolvable | typing.List[StorageFtpUserUserCredentials] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.customerServiceAccount">customer_service_account</a></code> | <code>str</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.storageDirectoryMappings">storage_directory_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userCredentials">user_credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]</code> | user_credentials block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_service_account`<sup>Required</sup> <a name="customer_service_account" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.customerServiceAccount"></a>

- *Type:* str

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.location"></a>

- *Type:* str

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.serverId"></a>

- *Type:* str

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userId"></a>

- *Type:* str

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `storage_directory_mappings`<sup>Optional</sup> <a name="storage_directory_mappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.storageDirectoryMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `user_credentials`<sup>Optional</sup> <a name="user_credentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userCredentials"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings">put_storage_directory_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials">put_user_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings">reset_storage_directory_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials">reset_user_credentials</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_storage_directory_mappings` <a name="put_storage_directory_mappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings"></a>

```python
def put_storage_directory_mappings(
  value: IResolvable | typing.List[StorageFtpUserStorageDirectoryMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}.

---

##### `put_user_credentials` <a name="put_user_credentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials"></a>

```python
def put_user_credentials(
  value: IResolvable | typing.List[StorageFtpUserUserCredentials]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_storage_directory_mappings` <a name="reset_storage_directory_mappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings"></a>

```python
def reset_storage_directory_mappings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_credentials` <a name="reset_user_credentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials"></a>

```python
def reset_user_credentials() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageFtpUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings">storage_directory_mappings</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials">user_credentials</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput">customer_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput">storage_directory_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput">user_credentials_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount">customer_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_directory_mappings`<sup>Required</sup> <a name="storage_directory_mappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings"></a>

```python
storage_directory_mappings: StorageFtpUserStorageDirectoryMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts"></a>

```python
timeouts: StorageFtpUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a>

---

##### `user_credentials`<sup>Required</sup> <a name="user_credentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials"></a>

```python
user_credentials: StorageFtpUserUserCredentialsList
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `customer_service_account_input`<sup>Optional</sup> <a name="customer_service_account_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput"></a>

```python
customer_service_account_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `storage_directory_mappings_input`<sup>Optional</sup> <a name="storage_directory_mappings_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput"></a>

```python
storage_directory_mappings_input: IResolvable | typing.List[StorageFtpUserStorageDirectoryMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageFtpUserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `user_credentials_input`<sup>Optional</sup> <a name="user_credentials_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput"></a>

```python
user_credentials_input: IResolvable | typing.List[StorageFtpUserUserCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `customer_service_account`<sup>Required</sup> <a name="customer_service_account" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount"></a>

```python
customer_service_account: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpUserConfig <a name="StorageFtpUserConfig" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer_service_account: str,
  location: str,
  server_id: str,
  user_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  storage_directory_mappings: IResolvable | typing.List[StorageFtpUserStorageDirectoryMappings] = None,
  timeouts: StorageFtpUserTimeouts = None,
  user_credentials: IResolvable | typing.List[StorageFtpUserUserCredentials] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount">customer_service_account</a></code> | <code>str</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId">server_id</a></code> | <code>str</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId">user_id</a></code> | <code>str</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings">storage_directory_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials">user_credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]</code> | user_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_service_account`<sup>Required</sup> <a name="customer_service_account" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount"></a>

```python
customer_service_account: str
```

- *Type:* str

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `storage_directory_mappings`<sup>Optional</sup> <a name="storage_directory_mappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings"></a>

```python
storage_directory_mappings: IResolvable | typing.List[StorageFtpUserStorageDirectoryMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts"></a>

```python
timeouts: StorageFtpUserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `user_credentials`<sup>Optional</sup> <a name="user_credentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials"></a>

```python
user_credentials: IResolvable | typing.List[StorageFtpUserUserCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

### StorageFtpUserStorageDirectoryMappings <a name="StorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserStorageDirectoryMappings(
  bucket: str = None,
  bucket_prefix: str = None,
  directory: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket">bucket</a></code> | <code>str</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory">directory</a></code> | <code>str</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission">permission</a></code> | <code>str</code> | The access level for the directory. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket StorageFtpUser#bucket}

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket_prefix StorageFtpUser#bucket_prefix}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory"></a>

```python
directory: str
```

- *Type:* str

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#directory StorageFtpUser#directory}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission"></a>

```python
permission: str
```

- *Type:* str

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#permission StorageFtpUser#permission}

---

### StorageFtpUserTimeouts <a name="StorageFtpUserTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}.

---

### StorageFtpUserUserCredentials <a name="StorageFtpUserUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserUserCredentials(
  credential_name: str = None,
  credential_type: str = None,
  ssh_public_key_body: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName">credential_name</a></code> | <code>str</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType">credential_type</a></code> | <code>str</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody">ssh_public_key_body</a></code> | <code>str</code> | The SSH public key body. |

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_name StorageFtpUser#credential_name}

---

##### `credential_type`<sup>Optional</sup> <a name="credential_type" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_type StorageFtpUser#credential_type}

---

##### `ssh_public_key_body`<sup>Optional</sup> <a name="ssh_public_key_body" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```python
ssh_public_key_body: str
```

- *Type:* str

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#ssh_public_key_body StorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpUserStorageDirectoryMappingsList <a name="StorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserStorageDirectoryMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageFtpUserStorageDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageFtpUserStorageDirectoryMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>]

---


### StorageFtpUserStorageDirectoryMappingsOutputReference <a name="StorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageFtpUserStorageDirectoryMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>

---


### StorageFtpUserTimeoutsOutputReference <a name="StorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageFtpUserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---


### StorageFtpUserUserCredentialsList <a name="StorageFtpUserUserCredentialsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserUserCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageFtpUserUserCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageFtpUserUserCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>]

---


### StorageFtpUserUserCredentialsOutputReference <a name="StorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_user

storageFtpUser.StorageFtpUserUserCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType">reset_credential_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">reset_ssh_public_key_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_credential_type` <a name="reset_credential_type" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```python
def reset_credential_type() -> None
```

##### `reset_ssh_public_key_body` <a name="reset_ssh_public_key_body" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```python
def reset_ssh_public_key_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">ssh_public_key_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">ssh_public_key_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `ssh_public_key_body_input`<sup>Optional</sup> <a name="ssh_public_key_body_input" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```python
ssh_public_key_body_input: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `ssh_public_key_body`<sup>Required</sup> <a name="ssh_public_key_body" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```python
ssh_public_key_body: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageFtpUserUserCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>

---




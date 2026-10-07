# `storageFtpServer` Submodule <a name="`storageFtpServer` Submodule" id="@cdktn/provider-google.storageFtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpServer <a name="StorageFtpServer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server google_storage_ftp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_type: str,
  location: str,
  server_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  external_config: StorageFtpServerExternalConfig = None,
  id: str = None,
  internal_config: StorageFtpServerInternalConfig = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: StorageFtpServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.externalConfig">external_config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.internalConfig">internal_config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.accessType"></a>

- *Type:* str

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.location"></a>

- *Type:* str

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.serverId"></a>

- *Type:* str

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}

---

##### `external_config`<sup>Optional</sup> <a name="external_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.externalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_config`<sup>Optional</sup> <a name="internal_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.internalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig">put_external_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig">put_internal_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig">reset_external_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig">reset_internal_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_config` <a name="put_external_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig"></a>

```python
def put_external_config(
  allowed_cidr_blocks: typing.List[str] = None
) -> None
```

###### `allowed_cidr_blocks`<sup>Optional</sup> <a name="allowed_cidr_blocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig.parameter.allowedCidrBlocks"></a>

- *Type:* typing.List[str]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#allowed_cidr_blocks StorageFtpServer#allowed_cidr_blocks}

---

##### `put_internal_config` <a name="put_internal_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig"></a>

```python
def put_internal_config(
  consumer_accept_list: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerAcceptListStruct] = None,
  consumer_reject_list: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerRejectListStruct] = None
) -> None
```

###### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig.parameter.consumerAcceptList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_accept_list StorageFtpServer#consumer_accept_list}

---

###### `consumer_reject_list`<sup>Optional</sup> <a name="consumer_reject_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig.parameter.consumerRejectList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_reject_list StorageFtpServer#consumer_reject_list}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_config` <a name="reset_external_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig"></a>

```python
def reset_external_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internal_config` <a name="reset_internal_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig"></a>

```python
def reset_internal_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageFtpServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageFtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig">external_config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig">internal_config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent">service_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput">external_config_input</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput">internal_config_input</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `external_config`<sup>Required</sup> <a name="external_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig"></a>

```python
external_config: StorageFtpServerExternalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a>

---

##### `internal_config`<sup>Required</sup> <a name="internal_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig"></a>

```python
internal_config: StorageFtpServerInternalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a>

---

##### `service_agent`<sup>Required</sup> <a name="service_agent" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent"></a>

```python
service_agent: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts"></a>

```python
timeouts: StorageFtpServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a>

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_config_input`<sup>Optional</sup> <a name="external_config_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput"></a>

```python
external_config_input: StorageFtpServerExternalConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_config_input`<sup>Optional</sup> <a name="internal_config_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput"></a>

```python
internal_config_input: StorageFtpServerInternalConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageFtpServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpServerConfig <a name="StorageFtpServerConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_type: str,
  location: str,
  server_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  external_config: StorageFtpServerExternalConfig = None,
  id: str = None,
  internal_config: StorageFtpServerInternalConfig = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: StorageFtpServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType">access_type</a></code> | <code>str</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId">server_id</a></code> | <code>str</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig">external_config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig">internal_config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}

---

##### `external_config`<sup>Optional</sup> <a name="external_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig"></a>

```python
external_config: StorageFtpServerExternalConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_config`<sup>Optional</sup> <a name="internal_config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig"></a>

```python
internal_config: StorageFtpServerInternalConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts"></a>

```python
timeouts: StorageFtpServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}

---

### StorageFtpServerExternalConfig <a name="StorageFtpServerExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerExternalConfig(
  allowed_cidr_blocks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks">allowed_cidr_blocks</a></code> | <code>typing.List[str]</code> | A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server. |

---

##### `allowed_cidr_blocks`<sup>Optional</sup> <a name="allowed_cidr_blocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks"></a>

```python
allowed_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#allowed_cidr_blocks StorageFtpServer#allowed_cidr_blocks}

---

### StorageFtpServerInternalConfig <a name="StorageFtpServerInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfig(
  consumer_accept_list: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerAcceptListStruct] = None,
  consumer_reject_list: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerRejectListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList">consumer_accept_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]</code> | consumer_accept_list block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList">consumer_reject_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]</code> | consumer_reject_list block. |

---

##### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList"></a>

```python
consumer_accept_list: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerAcceptListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_accept_list StorageFtpServer#consumer_accept_list}

---

##### `consumer_reject_list`<sup>Optional</sup> <a name="consumer_reject_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList"></a>

```python
consumer_reject_list: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerRejectListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_reject_list StorageFtpServer#consumer_reject_list}

---

### StorageFtpServerInternalConfigConsumerAcceptListStruct <a name="StorageFtpServerInternalConfigConsumerAcceptListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct(
  connection_limit: typing.Union[int, float],
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of Private Service Connect endpoints that can be created in the consumer project. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project">project</a></code> | <code>str</code> | The project that is allowed to connect, in the format 'projects/{project}'. |

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of Private Service Connect endpoints that can be created in the consumer project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#connection_limit StorageFtpServer#connection_limit}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project"></a>

```python
project: str
```

- *Type:* str

The project that is allowed to connect, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerInternalConfigConsumerRejectListStruct <a name="StorageFtpServerInternalConfigConsumerRejectListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct(
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project">project</a></code> | <code>str</code> | The project that is rejected from connecting, in the format 'projects/{project}'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project"></a>

```python
project: str
```

- *Type:* str

The project that is rejected from connecting, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerTimeouts <a name="StorageFtpServerTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpServerExternalConfigOutputReference <a name="StorageFtpServerExternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerExternalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks">reset_allowed_cidr_blocks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_cidr_blocks` <a name="reset_allowed_cidr_blocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks"></a>

```python
def reset_allowed_cidr_blocks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput">allowed_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks">allowed_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `allowed_cidr_blocks_input`<sup>Optional</sup> <a name="allowed_cidr_blocks_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput"></a>

```python
allowed_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_cidr_blocks`<sup>Required</sup> <a name="allowed_cidr_blocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks"></a>

```python
allowed_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageFtpServerExternalConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---


### StorageFtpServerInternalConfigConsumerAcceptListStructList <a name="StorageFtpServerInternalConfigConsumerAcceptListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerAcceptListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

---


### StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput">connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_limit_input`<sup>Optional</sup> <a name="connection_limit_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput"></a>

```python
connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageFtpServerInternalConfigConsumerAcceptListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>

---


### StorageFtpServerInternalConfigConsumerRejectListStructList <a name="StorageFtpServerInternalConfigConsumerRejectListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageFtpServerInternalConfigConsumerRejectListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerRejectListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]

---


### StorageFtpServerInternalConfigConsumerRejectListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerRejectListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageFtpServerInternalConfigConsumerRejectListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>

---


### StorageFtpServerInternalConfigOutputReference <a name="StorageFtpServerInternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerInternalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList">put_consumer_accept_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList">put_consumer_reject_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList">reset_consumer_accept_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList">reset_consumer_reject_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_consumer_accept_list` <a name="put_consumer_accept_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList"></a>

```python
def put_consumer_accept_list(
  value: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerAcceptListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

---

##### `put_consumer_reject_list` <a name="put_consumer_reject_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList"></a>

```python
def put_consumer_reject_list(
  value: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerRejectListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]

---

##### `reset_consumer_accept_list` <a name="reset_consumer_accept_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList"></a>

```python
def reset_consumer_accept_list() -> None
```

##### `reset_consumer_reject_list` <a name="reset_consumer_reject_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList"></a>

```python
def reset_consumer_reject_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList">consumer_accept_list</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList">consumer_reject_list</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput">consumer_accept_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput">consumer_reject_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_accept_list`<sup>Required</sup> <a name="consumer_accept_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList"></a>

```python
consumer_accept_list: StorageFtpServerInternalConfigConsumerAcceptListStructList
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a>

---

##### `consumer_reject_list`<sup>Required</sup> <a name="consumer_reject_list" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList"></a>

```python
consumer_reject_list: StorageFtpServerInternalConfigConsumerRejectListStructList
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a>

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `consumer_accept_list_input`<sup>Optional</sup> <a name="consumer_accept_list_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput"></a>

```python
consumer_accept_list_input: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerAcceptListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

---

##### `consumer_reject_list_input`<sup>Optional</sup> <a name="consumer_reject_list_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput"></a>

```python
consumer_reject_list_input: IResolvable | typing.List[StorageFtpServerInternalConfigConsumerRejectListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageFtpServerInternalConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---


### StorageFtpServerTimeoutsOutputReference <a name="StorageFtpServerTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_ftp_server

storageFtpServer.StorageFtpServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageFtpServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---




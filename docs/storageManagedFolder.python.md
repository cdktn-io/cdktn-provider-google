# `storageManagedFolder` Submodule <a name="`storageManagedFolder` Submodule" id="@cdktn/provider-google.storageManagedFolder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageManagedFolder <a name="StorageManagedFolder" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder google_storage_managed_folder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolder(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  name: str,
  deletion_policy: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  rapid_cache_config: StorageManagedFolderRapidCacheConfig = None,
  timeouts: StorageManagedFolderTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the bucket that contains the managed folder. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the managed folder expressed as a path. Must include trailing '/'. For example, 'example_dir/example_dir2/'. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | Allows the deletion of a managed folder even if contains objects. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.rapidCacheConfig">rapid_cache_config</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | rapid_cache_config block. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the bucket that contains the managed folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#bucket StorageManagedFolder#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.name"></a>

- *Type:* str

The name of the managed folder expressed as a path. Must include trailing '/'. For example, 'example_dir/example_dir2/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#name StorageManagedFolder#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#deletion_policy StorageManagedFolder#deletion_policy}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktn.IResolvable

Allows the deletion of a managed folder even if contains objects.

If a non-empty managed folder is deleted, any objects
within the folder will remain in a simulated folder with the
same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#force_destroy StorageManagedFolder#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rapid_cache_config`<sup>Optional</sup> <a name="rapid_cache_config" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.rapidCacheConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

rapid_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_config StorageManagedFolder#rapid_cache_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#timeouts StorageManagedFolder#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putRapidCacheConfig">put_rapid_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetRapidCacheConfig">reset_rapid_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rapid_cache_config` <a name="put_rapid_cache_config" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putRapidCacheConfig"></a>

```python
def put_rapid_cache_config(
  policies: IResolvable | typing.List[StorageManagedFolderRapidCacheConfigPolicies]
) -> None
```

###### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putRapidCacheConfig.parameter.policies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#policies StorageManagedFolder#policies}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#create StorageManagedFolder#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#delete StorageManagedFolder#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#update StorageManagedFolder#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rapid_cache_config` <a name="reset_rapid_cache_config" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetRapidCacheConfig"></a>

```python
def reset_rapid_cache_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageManagedFolder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isConstruct"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformElement"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformResource"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageManagedFolder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageManagedFolder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageManagedFolder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageManagedFolder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.metageneration">metageneration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfig">rapid_cache_config</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference">StorageManagedFolderRapidCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference">StorageManagedFolderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfigInput">rapid_cache_config_input</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metageneration`<sup>Required</sup> <a name="metageneration" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.metageneration"></a>

```python
metageneration: str
```

- *Type:* str

---

##### `rapid_cache_config`<sup>Required</sup> <a name="rapid_cache_config" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfig"></a>

```python
rapid_cache_config: StorageManagedFolderRapidCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference">StorageManagedFolderRapidCacheConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeouts"></a>

```python
timeouts: StorageManagedFolderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference">StorageManagedFolderTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rapid_cache_config_input`<sup>Optional</sup> <a name="rapid_cache_config_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfigInput"></a>

```python
rapid_cache_config_input: StorageManagedFolderRapidCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageManagedFolderTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageManagedFolderConfig <a name="StorageManagedFolderConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  name: str,
  deletion_policy: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  rapid_cache_config: StorageManagedFolderRapidCacheConfig = None,
  timeouts: StorageManagedFolderTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the bucket that contains the managed folder. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.name">name</a></code> | <code>str</code> | The name of the managed folder expressed as a path. Must include trailing '/'. For example, 'example_dir/example_dir2/'. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | Allows the deletion of a managed folder even if contains objects. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.rapidCacheConfig">rapid_cache_config</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | rapid_cache_config block. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the bucket that contains the managed folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#bucket StorageManagedFolder#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the managed folder expressed as a path. Must include trailing '/'. For example, 'example_dir/example_dir2/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#name StorageManagedFolder#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#deletion_policy StorageManagedFolder#deletion_policy}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Allows the deletion of a managed folder even if contains objects.

If a non-empty managed folder is deleted, any objects
within the folder will remain in a simulated folder with the
same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#force_destroy StorageManagedFolder#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rapid_cache_config`<sup>Optional</sup> <a name="rapid_cache_config" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.rapidCacheConfig"></a>

```python
rapid_cache_config: StorageManagedFolderRapidCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

rapid_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_config StorageManagedFolder#rapid_cache_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.timeouts"></a>

```python
timeouts: StorageManagedFolderTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#timeouts StorageManagedFolder#timeouts}

---

### StorageManagedFolderRapidCacheConfig <a name="StorageManagedFolderRapidCacheConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderRapidCacheConfig(
  policies: IResolvable | typing.List[StorageManagedFolderRapidCacheConfigPolicies]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig.property.policies">policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]</code> | policies block. |

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig.property.policies"></a>

```python
policies: IResolvable | typing.List[StorageManagedFolderRapidCacheConfigPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#policies StorageManagedFolder#policies}

---

### StorageManagedFolderRapidCacheConfigPolicies <a name="StorageManagedFolderRapidCacheConfigPolicies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies(
  rapid_cache_id: str,
  ingest_on_write: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.rapidCacheId">rapid_cache_id</a></code> | <code>str</code> | The unique identifier of the rapid cache. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.ingestOnWrite">ingest_on_write</a></code> | <code>str</code> | The ingest-on-write policy for objects in the managed folder. |

---

##### `rapid_cache_id`<sup>Required</sup> <a name="rapid_cache_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.rapidCacheId"></a>

```python
rapid_cache_id: str
```

- *Type:* str

The unique identifier of the rapid cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_id StorageManagedFolder#rapid_cache_id}

---

##### `ingest_on_write`<sup>Optional</sup> <a name="ingest_on_write" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.ingestOnWrite"></a>

```python
ingest_on_write: str
```

- *Type:* str

The ingest-on-write policy for objects in the managed folder.

When
set to 'enabled', objects are automatically ingested into the cache
when they are written to the managed folder.
Possible values: ["enabled", "unspecified"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#ingest_on_write StorageManagedFolder#ingest_on_write}

---

### StorageManagedFolderTimeouts <a name="StorageManagedFolderTimeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#create StorageManagedFolder#create}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#delete StorageManagedFolder#delete}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#update StorageManagedFolder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#create StorageManagedFolder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#delete StorageManagedFolder#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#update StorageManagedFolder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageManagedFolderRapidCacheConfigOutputReference <a name="StorageManagedFolderRapidCacheConfigOutputReference" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.putPolicies">put_policies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policies` <a name="put_policies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.putPolicies"></a>

```python
def put_policies(
  value: IResolvable | typing.List[StorageManagedFolderRapidCacheConfigPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList">StorageManagedFolderRapidCacheConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policiesInput">policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policies"></a>

```python
policies: StorageManagedFolderRapidCacheConfigPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList">StorageManagedFolderRapidCacheConfigPoliciesList</a>

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policiesInput"></a>

```python
policies_input: IResolvable | typing.List[StorageManagedFolderRapidCacheConfigPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageManagedFolderRapidCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

---


### StorageManagedFolderRapidCacheConfigPoliciesList <a name="StorageManagedFolderRapidCacheConfigPoliciesList" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageManagedFolderRapidCacheConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageManagedFolderRapidCacheConfigPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>]

---


### StorageManagedFolderRapidCacheConfigPoliciesOutputReference <a name="StorageManagedFolderRapidCacheConfigPoliciesOutputReference" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resetIngestOnWrite">reset_ingest_on_write</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingest_on_write` <a name="reset_ingest_on_write" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resetIngestOnWrite"></a>

```python
def reset_ingest_on_write() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWriteInput">ingest_on_write_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheIdInput">rapid_cache_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWrite">ingest_on_write</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheId">rapid_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingest_on_write_input`<sup>Optional</sup> <a name="ingest_on_write_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWriteInput"></a>

```python
ingest_on_write_input: str
```

- *Type:* str

---

##### `rapid_cache_id_input`<sup>Optional</sup> <a name="rapid_cache_id_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheIdInput"></a>

```python
rapid_cache_id_input: str
```

- *Type:* str

---

##### `ingest_on_write`<sup>Required</sup> <a name="ingest_on_write" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWrite"></a>

```python
ingest_on_write: str
```

- *Type:* str

---

##### `rapid_cache_id`<sup>Required</sup> <a name="rapid_cache_id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheId"></a>

```python
rapid_cache_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageManagedFolderRapidCacheConfigPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>

---


### StorageManagedFolderTimeoutsOutputReference <a name="StorageManagedFolderTimeoutsOutputReference" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_managed_folder

storageManagedFolder.StorageManagedFolderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageManagedFolderTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

---




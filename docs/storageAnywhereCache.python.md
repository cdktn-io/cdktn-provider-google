# `storageAnywhereCache` Submodule <a name="`storageAnywhereCache` Submodule" id="@cdktn/provider-google.storageAnywhereCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAnywhereCache <a name="StorageAnywhereCache" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache google_storage_anywhere_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCache(
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
  zone: str,
  admission_policy: str = None,
  deletion_policy: str = None,
  id: str = None,
  ingest_on_write: bool | IResolvable = None,
  timeouts: StorageAnywhereCacheTimeouts = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | A reference to Bucket resource. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone in which the cache instance needs to be created. For example, 'us-central1-a.'. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.admissionPolicy">admission_policy</a></code> | <code>str</code> | The cache admission policy dictates whether a block should be inserted upon a cache miss. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.ingestOnWrite">ingest_on_write</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not the cache ingests data as the data is written to the bucket. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.bucket"></a>

- *Type:* str

A reference to Bucket resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#bucket StorageAnywhereCache#bucket}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.zone"></a>

- *Type:* str

The zone in which the cache instance needs to be created. For example, 'us-central1-a.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#zone StorageAnywhereCache#zone}

---

##### `admission_policy`<sup>Optional</sup> <a name="admission_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.admissionPolicy"></a>

- *Type:* str

The cache admission policy dictates whether a block should be inserted upon a cache miss.

Note: "admit-on-second-miss" is deprecated and will fallback to "admit-on-first-miss". Default value: "admit-on-first-miss" Possible values: ["admit-on-first-miss", "admit-on-second-miss"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#admission_policy StorageAnywhereCache#admission_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#deletion_policy StorageAnywhereCache#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingest_on_write`<sup>Optional</sup> <a name="ingest_on_write" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.ingestOnWrite"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not the cache ingests data as the data is written to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#ingest_on_write StorageAnywhereCache#ingest_on_write}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#timeouts StorageAnywhereCache#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#ttl StorageAnywhereCache#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetAdmissionPolicy">reset_admission_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetIngestOnWrite">reset_ingest_on_write</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#create StorageAnywhereCache#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#delete StorageAnywhereCache#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#update StorageAnywhereCache#update}.

---

##### `reset_admission_policy` <a name="reset_admission_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetAdmissionPolicy"></a>

```python
def reset_admission_policy() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingest_on_write` <a name="reset_ingest_on_write" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetIngestOnWrite"></a>

```python
def reset_ingest_on_write() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageAnywhereCache resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isConstruct"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCache.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformElement"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCache.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformResource"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCache.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCache.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageAnywhereCache resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageAnywhereCache to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageAnywhereCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageAnywhereCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.anywhereCacheId">anywhere_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.pendingUpdate">pending_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference">StorageAnywhereCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicyInput">admission_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ingestOnWriteInput">ingest_on_write_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicy">admission_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ingestOnWrite">ingest_on_write</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anywhere_cache_id`<sup>Required</sup> <a name="anywhere_cache_id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.anywhereCacheId"></a>

```python
anywhere_cache_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `pending_update`<sup>Required</sup> <a name="pending_update" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.pendingUpdate"></a>

```python
pending_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeouts"></a>

```python
timeouts: StorageAnywhereCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference">StorageAnywhereCacheTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `admission_policy_input`<sup>Optional</sup> <a name="admission_policy_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicyInput"></a>

```python
admission_policy_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingest_on_write_input`<sup>Optional</sup> <a name="ingest_on_write_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ingestOnWriteInput"></a>

```python
ingest_on_write_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageAnywhereCacheTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `admission_policy`<sup>Required</sup> <a name="admission_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicy"></a>

```python
admission_policy: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_on_write`<sup>Required</sup> <a name="ingest_on_write" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ingestOnWrite"></a>

```python
ingest_on_write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCache.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAnywhereCacheConfig <a name="StorageAnywhereCacheConfig" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.Initializer"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCacheConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  zone: str,
  admission_policy: str = None,
  deletion_policy: str = None,
  id: str = None,
  ingest_on_write: bool | IResolvable = None,
  timeouts: StorageAnywhereCacheTimeouts = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.bucket">bucket</a></code> | <code>str</code> | A reference to Bucket resource. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.zone">zone</a></code> | <code>str</code> | The zone in which the cache instance needs to be created. For example, 'us-central1-a.'. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.admissionPolicy">admission_policy</a></code> | <code>str</code> | The cache admission policy dictates whether a block should be inserted upon a cache miss. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.ingestOnWrite">ingest_on_write</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not the cache ingests data as the data is written to the bucket. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

A reference to Bucket resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#bucket StorageAnywhereCache#bucket}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone in which the cache instance needs to be created. For example, 'us-central1-a.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#zone StorageAnywhereCache#zone}

---

##### `admission_policy`<sup>Optional</sup> <a name="admission_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.admissionPolicy"></a>

```python
admission_policy: str
```

- *Type:* str

The cache admission policy dictates whether a block should be inserted upon a cache miss.

Note: "admit-on-second-miss" is deprecated and will fallback to "admit-on-first-miss". Default value: "admit-on-first-miss" Possible values: ["admit-on-first-miss", "admit-on-second-miss"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#admission_policy StorageAnywhereCache#admission_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#deletion_policy StorageAnywhereCache#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingest_on_write`<sup>Optional</sup> <a name="ingest_on_write" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.ingestOnWrite"></a>

```python
ingest_on_write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not the cache ingests data as the data is written to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#ingest_on_write StorageAnywhereCache#ingest_on_write}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.timeouts"></a>

```python
timeouts: StorageAnywhereCacheTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#timeouts StorageAnywhereCache#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#ttl StorageAnywhereCache#ttl}

---

### StorageAnywhereCacheTimeouts <a name="StorageAnywhereCacheTimeouts" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.Initializer"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCacheTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#create StorageAnywhereCache#create}. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#delete StorageAnywhereCache#delete}. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#update StorageAnywhereCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#create StorageAnywhereCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#delete StorageAnywhereCache#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_anywhere_cache#update StorageAnywhereCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAnywhereCacheTimeoutsOutputReference <a name="StorageAnywhereCacheTimeoutsOutputReference" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import storage_anywhere_cache

storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageAnywhereCacheTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

---




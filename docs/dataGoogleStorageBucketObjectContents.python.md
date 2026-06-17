# `dataGoogleStorageBucketObjectContents` Submodule <a name="`dataGoogleStorageBucketObjectContents` Submodule" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObjectContents <a name="DataGoogleStorageBucketObjectContents" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents google_storage_bucket_object_contents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents(
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
  id: str = None,
  match_glob: str = None,
  prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#bucket DataGoogleStorageBucketObjectContents#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#id DataGoogleStorageBucketObjectContents#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.matchGlob">match_glob</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#match_glob DataGoogleStorageBucketObjectContents#match_glob}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#prefix DataGoogleStorageBucketObjectContents#prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#bucket DataGoogleStorageBucketObjectContents#bucket}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#id DataGoogleStorageBucketObjectContents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_glob`<sup>Optional</sup> <a name="match_glob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.matchGlob"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#match_glob DataGoogleStorageBucketObjectContents#match_glob}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#prefix DataGoogleStorageBucketObjectContents#prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetMatchGlob">reset_match_glob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match_glob` <a name="reset_match_glob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetMatchGlob"></a>

```python
def reset_match_glob() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetPrefix"></a>

```python
def reset_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageBucketObjectContents resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isConstruct"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageBucketObjectContents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageBucketObjectContents to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageBucketObjectContents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObjectContents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketObjects">bucket_objects</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList">DataGoogleStorageBucketObjectContentsBucketObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlobInput">match_glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlob">match_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `bucket_objects`<sup>Required</sup> <a name="bucket_objects" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketObjects"></a>

```python
bucket_objects: DataGoogleStorageBucketObjectContentsBucketObjectsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList">DataGoogleStorageBucketObjectContentsBucketObjectsList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_glob_input`<sup>Optional</sup> <a name="match_glob_input" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlobInput"></a>

```python
match_glob_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_glob`<sup>Required</sup> <a name="match_glob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlob"></a>

```python
match_glob: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectContentsBucketObjects <a name="DataGoogleStorageBucketObjectContentsBucketObjects" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects()
```


### DataGoogleStorageBucketObjectContentsConfig <a name="DataGoogleStorageBucketObjectContentsConfig" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  id: str = None,
  match_glob: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#bucket DataGoogleStorageBucketObjectContents#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#id DataGoogleStorageBucketObjectContents#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.matchGlob">match_glob</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#match_glob DataGoogleStorageBucketObjectContents#match_glob}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#prefix DataGoogleStorageBucketObjectContents#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#bucket DataGoogleStorageBucketObjectContents#bucket}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#id DataGoogleStorageBucketObjectContents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_glob`<sup>Optional</sup> <a name="match_glob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.matchGlob"></a>

```python
match_glob: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#match_glob DataGoogleStorageBucketObjectContents#match_glob}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/storage_bucket_object_contents#prefix DataGoogleStorageBucketObjectContents#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectContentsBucketObjectsList <a name="DataGoogleStorageBucketObjectContentsBucketObjectsList" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference <a name="DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_bucket_object_contents

dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64Sha512">content_base64_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentHexsha512">content_hexsha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.mediaLink">media_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects">DataGoogleStorageBucketObjectContentsBucketObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `content_base64_sha512`<sup>Required</sup> <a name="content_base64_sha512" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64Sha512"></a>

```python
content_base64_sha512: str
```

- *Type:* str

---

##### `content_hexsha512`<sup>Required</sup> <a name="content_hexsha512" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentHexsha512"></a>

```python
content_hexsha512: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `media_link`<sup>Required</sup> <a name="media_link" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.mediaLink"></a>

```python
media_link: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketObjectContentsBucketObjects
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects">DataGoogleStorageBucketObjectContentsBucketObjects</a>

---




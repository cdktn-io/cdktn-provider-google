# `dataGoogleOracleDatabaseExascaleDbStorageVaults` Submodule <a name="`dataGoogleOracleDatabaseExascaleDbStorageVaults` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaults <a name="DataGoogleOracleDatabaseExascaleDbStorageVaults" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults google_oracle_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.location">location</a></code> | <code>str</code> | location. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the dataset is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.location"></a>

- *Type:* str

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#location DataGoogleOracleDatabaseExascaleDbStorageVaults#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#project DataGoogleOracleDatabaseExascaleDbStorageVaults#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVaults resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVaults resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseExascaleDbStorageVaults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">exascale_db_storage_vaults</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `exascale_db_storage_vaults`<sup>Required</sup> <a name="exascale_db_storage_vaults" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```python
exascale_db_storage_vaults: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.location">location</a></code> | <code>str</code> | location. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#location DataGoogleOracleDatabaseExascaleDbStorageVaults#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#project DataGoogleOracleDatabaseExascaleDbStorageVaults#project}

---

### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults()
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties()
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails()
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionProtection">deletion_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exascaleDbStorageVaultId"></a>

```python
exascale_db_storage_vault_id: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.properties"></a>

```python
properties: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">available_size_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">total_size_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_size_gbs`<sup>Required</sup> <a name="available_size_gbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```python
available_size_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_gbs`<sup>Required</sup> <a name="total_size_gbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```python
total_size_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.additionalFlashCachePercent">additional_flash_cache_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.attachedShapeAttributes">attached_shape_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.availableShapeAttributes">available_shape_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.exascaleDbStorageDetails">exascale_db_storage_details</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ociUri">oci_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterCount">vm_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterIds">vm_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_flash_cache_percent`<sup>Required</sup> <a name="additional_flash_cache_percent" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```python
additional_flash_cache_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attached_shape_attributes`<sup>Required</sup> <a name="attached_shape_attributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.attachedShapeAttributes"></a>

```python
attached_shape_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `available_shape_attributes`<sup>Required</sup> <a name="available_shape_attributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.availableShapeAttributes"></a>

```python
available_shape_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exascale_db_storage_details`<sup>Required</sup> <a name="exascale_db_storage_details" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```python
exascale_db_storage_details: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_uri`<sup>Required</sup> <a name="oci_uri" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ociUri"></a>

```python
oci_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList</a>

---

##### `vm_cluster_count`<sup>Required</sup> <a name="vm_cluster_count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterCount"></a>

```python
vm_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_cluster_ids`<sup>Required</sup> <a name="vm_cluster_ids" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterIds"></a>

```python
vm_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vaults

dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone</a>

---




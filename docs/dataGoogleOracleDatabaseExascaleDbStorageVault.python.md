# `dataGoogleOracleDatabaseExascaleDbStorageVault` Submodule <a name="`dataGoogleOracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVault <a name="DataGoogleOracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exascale_db_storage_vault_id: str,
  location: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#id DataGoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#project DataGoogleOracleDatabaseExascaleDbStorageVault#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.exascaleDbStorageVaultId"></a>

- *Type:* str

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id DataGoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#location DataGoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#id DataGoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#project DataGoogleOracleDatabaseExascaleDbStorageVault#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseExascaleDbStorageVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection">deletion_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascale_db_storage_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.properties"></a>

```python
properties: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `exascale_db_storage_vault_id_input`<sup>Optional</sup> <a name="exascale_db_storage_vault_id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```python
exascale_db_storage_vault_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```python
exascale_db_storage_vault_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultConfig <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exascale_db_storage_vault_id: str,
  location: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascale_db_storage_vault_id</a></code> | <code>str</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#id DataGoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#project DataGoogleOracleDatabaseExascaleDbStorageVault#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exascale_db_storage_vault_id`<sup>Required</sup> <a name="exascale_db_storage_vault_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```python
exascale_db_storage_vault_id: str
```

- *Type:* str

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id DataGoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#location DataGoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#id DataGoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#project DataGoogleOracleDatabaseExascaleDbStorageVault#project}.

---

### DataGoogleOracleDatabaseExascaleDbStorageVaultProperties <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties()
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails()
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">available_size_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">total_size_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_size_gbs`<sup>Required</sup> <a name="available_size_gbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```python
available_size_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_gbs`<sup>Required</sup> <a name="total_size_gbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```python
total_size_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">additional_flash_cache_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">attached_shape_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">available_shape_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">exascale_db_storage_details</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">oci_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">vm_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">vm_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_flash_cache_percent`<sup>Required</sup> <a name="additional_flash_cache_percent" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```python
additional_flash_cache_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attached_shape_attributes`<sup>Required</sup> <a name="attached_shape_attributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```python
attached_shape_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `available_shape_attributes`<sup>Required</sup> <a name="available_shape_attributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```python
available_shape_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exascale_db_storage_details`<sup>Required</sup> <a name="exascale_db_storage_details" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```python
exascale_db_storage_details: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_uri`<sup>Required</sup> <a name="oci_uri" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```python
oci_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList</a>

---

##### `vm_cluster_count`<sup>Required</sup> <a name="vm_cluster_count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```python
vm_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_cluster_ids`<sup>Required</sup> <a name="vm_cluster_ids" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```python
vm_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultProperties
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_exascale_db_storage_vault

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---




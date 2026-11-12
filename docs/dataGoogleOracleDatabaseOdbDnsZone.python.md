# `dataGoogleOracleDatabaseOdbDnsZone` Submodule <a name="`dataGoogleOracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseOdbDnsZone <a name="DataGoogleOracleDatabaseOdbDnsZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_odb_dns_zone

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  odb_dns_zone_id: str,
  odbnetwork: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbDnsZoneId">odb_dns_zone_id</a></code> | <code>str</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbnetwork">odbnetwork</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `odb_dns_zone_id`<sup>Required</sup> <a name="odb_dns_zone_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbDnsZoneId"></a>

- *Type:* str

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odb_dns_zone_id DataGoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbnetwork"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odbnetwork DataGoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#location DataGoogleOracleDatabaseOdbDnsZone#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct"></a>

```python
from cdktn_provider_google import data_google_oracle_database_odb_dns_zone

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_oracle_database_odb_dns_zone

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_oracle_database_odb_dns_zone

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_oracle_database_odb_dns_zone

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseOdbDnsZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection">deletion_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">odb_dns_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput">odbnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId">odb_dns_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork">odbnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `odb_dns_zone_id_input`<sup>Optional</sup> <a name="odb_dns_zone_id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```python
odb_dns_zone_id_input: str
```

- *Type:* str

---

##### `odbnetwork_input`<sup>Optional</sup> <a name="odbnetwork_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```python
odbnetwork_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `odb_dns_zone_id`<sup>Required</sup> <a name="odb_dns_zone_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```python
odb_dns_zone_id: str
```

- *Type:* str

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```python
odbnetwork: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseOdbDnsZoneConfig <a name="DataGoogleOracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_odb_dns_zone

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  odb_dns_zone_id: str,
  odbnetwork: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">odb_dns_zone_id</a></code> | <code>str</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork">odbnetwork</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `odb_dns_zone_id`<sup>Required</sup> <a name="odb_dns_zone_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```python
odb_dns_zone_id: str
```

- *Type:* str

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odb_dns_zone_id DataGoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```python
odbnetwork: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odbnetwork DataGoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#location DataGoogleOracleDatabaseOdbDnsZone#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}.

---




# `dataGoogleOracleDatabaseGoldengateDeploymentTypes` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentTypes` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypes <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types google_oracle_database_goldengate_deployment_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes(
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#location DataGoogleOracleDatabaseGoldengateDeploymentTypes#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#project DataGoogleOracleDatabaseGoldengateDeploymentTypes#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.goldengateDeploymentTypes">goldengate_deployment_types</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `goldengate_deployment_types`<sup>Required</sup> <a name="goldengate_deployment_types" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.goldengateDeploymentTypes"></a>

```python
goldengate_deployment_types: DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig(
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#location DataGoogleOracleDatabaseGoldengateDeploymentTypes#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/oracle_database_goldengate_deployment_types#project DataGoogleOracleDatabaseGoldengateDeploymentTypes#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_types

dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.connectionTypes">connection_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.defaultUsername">default_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.sourceTechnologies">source_technologies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedCapabilities">supported_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedTechnologiesUrl">supported_technologies_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.targetTechnologies">target_technologies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `connection_types`<sup>Required</sup> <a name="connection_types" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.connectionTypes"></a>

```python
connection_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_username`<sup>Required</sup> <a name="default_username" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.defaultUsername"></a>

```python
default_username: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `source_technologies`<sup>Required</sup> <a name="source_technologies" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.sourceTechnologies"></a>

```python
source_technologies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_capabilities`<sup>Required</sup> <a name="supported_capabilities" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedCapabilities"></a>

```python
supported_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_technologies_url`<sup>Required</sup> <a name="supported_technologies_url" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedTechnologiesUrl"></a>

```python
supported_technologies_url: str
```

- *Type:* str

---

##### `target_technologies`<sup>Required</sup> <a name="target_technologies" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.targetTechnologies"></a>

```python
target_technologies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes</a>

---




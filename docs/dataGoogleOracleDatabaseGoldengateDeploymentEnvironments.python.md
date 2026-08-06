# `dataGoogleOracleDatabaseGoldengateDeploymentEnvironments` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentEnvironments` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironments <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments google_oracle_database_goldengate_deployment_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments(
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#location DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#project DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentEnvironments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentEnvironments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.goldengateDeploymentEnvironments">goldengate_deployment_environments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `goldengate_deployment_environments`<sup>Required</sup> <a name="goldengate_deployment_environments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.goldengateDeploymentEnvironments"></a>

```python
goldengate_deployment_environments: DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig(
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#location DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_deployment_environments#project DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_environments

dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.defaultCpuCoreCount">default_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.memoryGbPerCpuCore">memory_gb_per_cpu_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.minCpuCoreCount">min_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.networkBandwidthGbpsPerCpuCore">network_bandwidth_gbps_per_cpu_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.storageUsageLimitGbPerCpuCore">storage_usage_limit_gb_per_cpu_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `default_cpu_core_count`<sup>Required</sup> <a name="default_cpu_core_count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.defaultCpuCoreCount"></a>

```python
default_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `max_cpu_core_count`<sup>Required</sup> <a name="max_cpu_core_count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.maxCpuCoreCount"></a>

```python
max_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_per_cpu_core`<sup>Required</sup> <a name="memory_gb_per_cpu_core" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.memoryGbPerCpuCore"></a>

```python
memory_gb_per_cpu_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cpu_core_count`<sup>Required</sup> <a name="min_cpu_core_count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.minCpuCoreCount"></a>

```python
min_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_bandwidth_gbps_per_cpu_core`<sup>Required</sup> <a name="network_bandwidth_gbps_per_cpu_core" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.networkBandwidthGbpsPerCpuCore"></a>

```python
network_bandwidth_gbps_per_cpu_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_usage_limit_gb_per_cpu_core`<sup>Required</sup> <a name="storage_usage_limit_gb_per_cpu_core" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.storageUsageLimitGbPerCpuCore"></a>

```python
storage_usage_limit_gb_per_cpu_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments</a>

---




# `dataGoogleOracleDatabaseGoldengateDeploymentVersions` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentVersions` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersions <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions google_oracle_database_goldengate_deployment_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions(
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#location DataGoogleOracleDatabaseGoldengateDeploymentVersions#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#project DataGoogleOracleDatabaseGoldengateDeploymentVersions#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.goldengateDeploymentVersions">goldengate_deployment_versions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `goldengate_deployment_versions`<sup>Required</sup> <a name="goldengate_deployment_versions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.goldengateDeploymentVersions"></a>

```python
goldengate_deployment_versions: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig(
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#location DataGoogleOracleDatabaseGoldengateDeploymentVersions#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/oracle_database_goldengate_deployment_versions#project DataGoogleOracleDatabaseGoldengateDeploymentVersions#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions()
```


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.properties"></a>

```python
properties: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions</a>

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_oracle_database_goldengate_deployment_versions

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseTime">release_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseType">release_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.securityFix">security_fix</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.supportEndTime">support_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `release_time`<sup>Required</sup> <a name="release_time" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseTime"></a>

```python
release_time: str
```

- *Type:* str

---

##### `release_type`<sup>Required</sup> <a name="release_type" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseType"></a>

```python
release_type: str
```

- *Type:* str

---

##### `security_fix`<sup>Required</sup> <a name="security_fix" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.securityFix"></a>

```python
security_fix: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `support_end_time`<sup>Required</sup> <a name="support_end_time" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.supportEndTime"></a>

```python
support_end_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties</a>

---




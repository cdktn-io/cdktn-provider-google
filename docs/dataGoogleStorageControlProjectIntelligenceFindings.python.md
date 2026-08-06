# `dataGoogleStorageControlProjectIntelligenceFindings` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindings` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindings <a name="DataGoogleStorageControlProjectIntelligenceFindings" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings google_storage_control_project_intelligence_findings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  location: str = None,
  page_size: typing.Union[int, float] = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter expression to apply. Supports filtering by type and associated_resources. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the intelligence findings. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of IntelligenceFinding resources to return. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.filter"></a>

- *Type:* str

The filter expression to apply. Supports filtering by type and associated_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#filter DataGoogleStorageControlProjectIntelligenceFindings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.location"></a>

- *Type:* str

The location of the intelligence findings. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#location DataGoogleStorageControlProjectIntelligenceFindings#location}

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of IntelligenceFinding resources to return.

The maximum value is 100; values greater than 100 become 100. The default value is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#page_size DataGoogleStorageControlProjectIntelligenceFindings#page_size}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#project DataGoogleStorageControlProjectIntelligenceFindings#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isConstruct"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlProjectIntelligenceFindings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.findings">findings</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `findings`<sup>Required</sup> <a name="findings" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.findings"></a>

```python
findings: DataGoogleStorageControlProjectIntelligenceFindingsFindingsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingsConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  location: str = None,
  page_size: typing.Union[int, float] = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.filter">filter</a></code> | <code>str</code> | The filter expression to apply. Supports filtering by type and associated_resources. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.location">location</a></code> | <code>str</code> | The location of the intelligence findings. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of IntelligenceFinding resources to return. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter expression to apply. Supports filtering by type and associated_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#filter DataGoogleStorageControlProjectIntelligenceFindings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the intelligence findings. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#location DataGoogleStorageControlProjectIntelligenceFindings#location}

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of IntelligenceFinding resources to return.

The maximum value is 100; values greater than 100 become 100. The default value is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#page_size DataGoogleStorageControlProjectIntelligenceFindings#page_size}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings#project DataGoogleStorageControlProjectIntelligenceFindings#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingsFindings <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindings" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList</a>

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.associatedResources">associated_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.coldlineAndArchivalStorageOperationsSpike">coldline_and_archival_storage_operations_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.crossRegionEgressSpike">cross_region_egress_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.observationPeriod">observation_period</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.storageGrowthAboveTrend">storage_growth_above_trend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.throttledRequestsSpike">throttled_requests_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings">DataGoogleStorageControlProjectIntelligenceFindingsFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_resources`<sup>Required</sup> <a name="associated_resources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.associatedResources"></a>

```python
associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `coldline_and_archival_storage_operations_spike`<sup>Required</sup> <a name="coldline_and_archival_storage_operations_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```python
coldline_and_archival_storage_operations_spike: DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `cross_region_egress_spike`<sup>Required</sup> <a name="cross_region_egress_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.crossRegionEgressSpike"></a>

```python
cross_region_egress_spike: DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `observation_period`<sup>Required</sup> <a name="observation_period" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.observationPeriod"></a>

```python
observation_period: DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `storage_growth_above_trend`<sup>Required</sup> <a name="storage_growth_above_trend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.storageGrowthAboveTrend"></a>

```python
storage_growth_above_trend: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList</a>

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

##### `throttled_requests_spike`<sup>Required</sup> <a name="throttled_requests_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.throttledRequestsSpike"></a>

```python
throttled_requests_spike: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindings
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings">DataGoogleStorageControlProjectIntelligenceFindingsFindings</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList</a>

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings

dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets</a>

---




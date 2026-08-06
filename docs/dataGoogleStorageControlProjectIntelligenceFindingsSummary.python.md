# `dataGoogleStorageControlProjectIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummary <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary google_storage_control_project_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary(
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
  project: str = None,
  resource_scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.resourceScope">resource_scope</a></code> | <code>str</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.filter"></a>

- *Type:* str

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#filter DataGoogleStorageControlProjectIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.location"></a>

- *Type:* str

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#location DataGoogleStorageControlProjectIntelligenceFindingsSummary#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#project DataGoogleStorageControlProjectIntelligenceFindingsSummary#project}

---

##### `resource_scope`<sup>Optional</sup> <a name="resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.resourceScope"></a>

- *Type:* str

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#resource_scope DataGoogleStorageControlProjectIntelligenceFindingsSummary#resource_scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetResourceScope">reset_resource_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_resource_scope` <a name="reset_resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetResourceScope"></a>

```python
def reset_resource_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingsSummary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.findingSummaries">finding_summaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScopeInput">resource_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScope">resource_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `finding_summaries`<sup>Required</sup> <a name="finding_summaries" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.findingSummaries"></a>

```python
finding_summaries: DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_scope_input`<sup>Optional</sup> <a name="resource_scope_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```python
resource_scope_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource_scope`<sup>Required</sup> <a name="resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScope"></a>

```python
resource_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig(
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
  project: str = None,
  resource_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.filter">filter</a></code> | <code>str</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.location">location</a></code> | <code>str</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.resourceScope">resource_scope</a></code> | <code>str</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#filter DataGoogleStorageControlProjectIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#location DataGoogleStorageControlProjectIntelligenceFindingsSummary#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#project DataGoogleStorageControlProjectIntelligenceFindingsSummary#project}

---

##### `resource_scope`<sup>Optional</sup> <a name="resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```python
resource_scope: str
```

- *Type:* str

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/storage_control_project_intelligence_findings_summary#resource_scope DataGoogleStorageControlProjectIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries()
```


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">summary_details</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `summary_details`<sup>Required</sup> <a name="summary_details" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```python
summary_details: DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_findings_summary

dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```python
count: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---




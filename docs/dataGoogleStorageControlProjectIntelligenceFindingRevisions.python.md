# `dataGoogleStorageControlProjectIntelligenceFindingRevisions` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingRevisions` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisions <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisions" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions google_storage_control_project_intelligence_finding_revisions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_id: str,
  id: str = None,
  location: str = None,
  page_size: typing.Union[int, float] = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.findingId">finding_id</a></code> | <code>str</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of IntelligenceFindingRevision resources to return. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.findingId"></a>

- *Type:* str

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevisions#finding_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.location"></a>

- *Type:* str

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#location DataGoogleStorageControlProjectIntelligenceFindingRevisions#location}

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of IntelligenceFindingRevision resources to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#page_size DataGoogleStorageControlProjectIntelligenceFindingRevisions#page_size}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#project DataGoogleStorageControlProjectIntelligenceFindingRevisions#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevisions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isConstruct"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevisions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevisions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevisions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevisions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.revisions">revisions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingIdInput">finding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingId">finding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.revisions"></a>

```python
revisions: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList</a>

---

##### `finding_id_input`<sup>Optional</sup> <a name="finding_id_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingIdInput"></a>

```python
finding_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingId"></a>

```python
finding_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_id: str,
  id: str = None,
  location: str = None,
  page_size: typing.Union[int, float] = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.findingId">finding_id</a></code> | <code>str</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.location">location</a></code> | <code>str</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of IntelligenceFindingRevision resources to return. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.findingId"></a>

```python
finding_id: str
```

- *Type:* str

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevisions#finding_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#location DataGoogleStorageControlProjectIntelligenceFindingRevisions#location}

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of IntelligenceFindingRevision resources to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#page_size DataGoogleStorageControlProjectIntelligenceFindingRevisions#page_size}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#project DataGoogleStorageControlProjectIntelligenceFindingRevisions#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.snapshot"></a>

```python
snapshot: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList</a>

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.associatedResources">associated_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike">coldline_and_archival_storage_operations_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.crossRegionEgressSpike">cross_region_egress_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.observationPeriod">observation_period</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.storageGrowthAboveTrend">storage_growth_above_trend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.throttledRequestsSpike">throttled_requests_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_resources`<sup>Required</sup> <a name="associated_resources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.associatedResources"></a>

```python
associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `coldline_and_archival_storage_operations_spike`<sup>Required</sup> <a name="coldline_and_archival_storage_operations_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```python
coldline_and_archival_storage_operations_spike: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `cross_region_egress_spike`<sup>Required</sup> <a name="cross_region_egress_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.crossRegionEgressSpike"></a>

```python
cross_region_egress_spike: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `observation_period`<sup>Required</sup> <a name="observation_period" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.observationPeriod"></a>

```python
observation_period: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `storage_growth_above_trend`<sup>Required</sup> <a name="storage_growth_above_trend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.storageGrowthAboveTrend"></a>

```python
storage_growth_above_trend: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList</a>

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

##### `throttled_requests_spike`<sup>Required</sup> <a name="throttled_requests_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.throttledRequestsSpike"></a>

```python
throttled_requests_spike: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList</a>

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding_revisions

dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets</a>

---



